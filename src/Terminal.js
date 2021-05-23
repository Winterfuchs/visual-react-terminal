import React from 'react';
import CommandRunner from './emulator/command-runner';
import { connect } from 'react-redux';
import { getCommands } from './parser/command-parser';
import output from './terminal-output';
import { promptPrefix } from './config';

import basic from './themes/basic'

function Terminal({onInputChange, onKeyPressed, userInput, history, commandHistory, themes, commands}) {
  const inputField = React.createRef();
  const theme = themes ? themes : basic;
  return(
    <div className="terminal" style={{...theme.terminal}}>
      <div className="console" style={{...theme.console}}onClick={() => {inputField.current.focus()}}>
        <div className="content" style={{...theme.content}}>
          {history.map((item, index) => (
            <div key={index} style={item.style}>{item.content}</div>
          ))}
          <div className="input-area" style={{...theme.inputArea}}>
            <span className="prompt" style={{...theme.prompt}}>{promptPrefix}</span>
            <input ref={inputField} className="input" style={{...theme.input}} onChange={onInputChange} onKeyDown={(e) => { onKeyPressed(e, commandHistory, commands) } } value={userInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userInput: state.userInput,
    history: state.history,
    commandHistory: state.commandHistory
  };
}

function mapDispatchToProps(dispatch) {
  let cmd_index = 0;
  let cmd_offset_index = -1;

  return {
    onInputChange: (e) => {
      const action = {
        type: 'INPUTCHANGE',
        userInput: e.target.value
      }
      dispatch(action);
    },
    onKeyPressed: (e, commandHistory, commands) => {
      switch(e.key) {
        case 'Enter':
          cmd_index = 0;
          const runner = new CommandRunner(commands);
          const response = runner.exec(getCommands(e.target.value));
          const result = [output.doPromptOutput(e.target.value)]; // [{}, {}]
          if (response) {
            result.push(response);
          }
          const action = {
            type: 'SUBMIT',
            history: result,
            commandHistory: [e.target.value]
          }
          dispatch(action);
          break;

        case 'ArrowUp':
          if (commandHistory.length > -cmd_index) {
            cmd_index -= 1;
            e.target.value = commandHistory[commandHistory.length+cmd_index];
          }
          break;

        case 'ArrowDown':
          if (cmd_offset_index > cmd_index) {
            cmd_index += 1;
            e.target.value = commandHistory[commandHistory.length+cmd_index];
          }
          break;

        default:
          //Default case is only needed to get rid of the console warnings..
          break;
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
