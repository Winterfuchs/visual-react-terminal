import { createStore } from 'redux';
import output from '../terminal-output'
import { startupMessage } from '../config'

const initialState = {
  userInput: '',
  history: [output.doInfoOutput(...startupMessage)],
  commandHistory: [],
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INPUTCHANGE':
      return Object.assign({}, state, {userInput: action.userInput});

    case 'SUBMIT':
      return Object.assign({}, state, {
        userInput: '',
        history: [...state.history, ...action.history],
        commandHistory: [...state.commandHistory, ...action.commandHistory],
      });

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
