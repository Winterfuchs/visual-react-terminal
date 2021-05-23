import output from '../terminal-output';

export default class CommandRunner {
  constructor(commands) {
    this.commands = commands;
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
          response = output.doErrorOutput('Emulator: Command \'' + element.command + '\' not found.');
        }
    });
    return response;
  }
}
