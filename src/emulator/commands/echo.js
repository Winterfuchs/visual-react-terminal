import { doTextOutput } from '../../terminal-output/output';

export default class Echo {
  constructor(options) {
    this.name = 'echo';
    this.desc = 'Outputs a string';
  };

  run(params) {
    const str = params.join(' ');
    return doTextOutput(str);
  };
}
