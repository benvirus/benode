const path = require('path');
const fs = require('fs');
const StringUtil = require(__serverdir + '/src/utils/String');
const [cmd, ...cmdArgv] = process.argv.slice(2);

if (cmd) {
  const [mainCmd, subCmd] = cmd.split(':');

  CommandClassFileName = StringUtil.upperCase1stString(mainCmd) + 'Command';

  // Create a migration;
  const CommandClass = require(__serverdir + '/src/Commands/' + CommandClassFileName);
  let commandInstance = new CommandClass();
  commandInstance[subCmd](cmdArgv);
  commandInstance = null;

} else {
  console.log('=== bin/console ===');
  const mainCommandClassFiles = fs.readdirSync(__serverdir + '/src/Commands');
  if (mainCommandClassFiles.length) {
    mainCommandClassFiles.map((file) => {
      const endIndex = file.indexOf('Command.js');
      const mainCmdName = file.substring(0, endIndex).toLowerCase();
      console.log('-------------------------');
      const mainCommandClass = require(__serverdir + '/src/Commands/' + file);

      Object.getOwnPropertyNames(mainCommandClass.prototype).map(method => {
        if (!(method.startsWith('_') || method === 'constructor')) {
          console.log(`  ${mainCmdName}:${method}`);
        }
      });
    });
    console.log('-------------------------');
  }
}