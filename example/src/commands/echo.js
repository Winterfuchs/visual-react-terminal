import { output } from 'visual-react-terminal'

export default class Echo {
  constructor(options) {
    this.name = 'echo';
    this.desc = 'Outputs a string (this is just an example command)';
  };

  run(params) {
    const str = params.join(' ');
    return output.doTextOutput(str);
  };
}
