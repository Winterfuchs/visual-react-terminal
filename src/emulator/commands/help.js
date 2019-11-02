import { doTextOutput } from '../../terminal-output/output';
import { cmdList } from '../command-list';

export default class Help {
  constructor(options) {
    this.name = 'help'
    this.desc = 'Shows all registered commands with description'
  }

  run(params) {
    let help = []
    for (var element in cmdList) {
      const obj = new cmdList[element]()
      help.push(obj.name + ' - ' + obj.desc);
    };
    return doTextOutput(...help);
  }
}
