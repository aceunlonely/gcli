
var changeCompletions



var run = function(){


}


const readline = require('readline');

function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) => { return c.indexOf(line) === 0 });
  // show all completions if none found
  return [hits.length ? hits : completions, line];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer,
    historySize : 50,
});
rl.setPrompt('gcli>')
rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit?', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});