const removeUnnecessaryWhiteSpace = str => str.trim().replace(/\s\s+/g, ' ');
const getCommandParts = command => removeUnnecessaryWhiteSpace(command).split(/\s/);

const parseCommands = (commands) => {
  return commands
  .split(/&&|;/)
  .map((command) => getCommandParts(command));
}

export const getCommands = (input) => {
  const cmd = parseCommands(input);
  const commands = [];
  //Map
  cmd.forEach((element) => {
    const command = {
      command: element.shift(),
      params: element
    };
    commands.push(command);
  });
  return commands;
}
