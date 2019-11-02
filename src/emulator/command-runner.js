import { doErrorOutput } from '../terminal-output/output';
import { cmdList } from './command-list';

export default class CommandRunner {
  constructor(params) {
    this.commands = cmdList;
  }

  exec(commands) {
    let response = {};
    commands.forEach((element) => {
      if (element.command in this.commands) {
          const params = element.params
          const func = this.commands[element.command];
          const cmd = new func();
          response = cmd.run(params);
        } else if(element.command !== '') {
          response = doErrorOutput('Emulator: Command \'' + element.command + '\' not found.');
        }
    });
    return response;
  }
}
