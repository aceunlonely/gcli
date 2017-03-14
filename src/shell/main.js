//vars
var currentCompletion = "help test test1 teab";
var shellMap = {};


//initials
addSubShell('gcli',currentCompletion);



const readline = require('readline');
function completer(line) {
  var completions = currentCompletion.split(' ');
  const hits = completions.filter((c) => { return c.indexOf(line) === 0 });
  var showLine = line;
  var showMetion =hits.length ? hits : completions;
  return [showMetion, showLine];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer,
    historySize : 50,
});

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

// rl.on('SIGINT', () => {
//   rl.question('Are you sure you want to exit?', (answer) => {
//     if (answer.match(/^y(es)?$/i)) rl.pause();
//   });
// });

var innerRun = function(params){
    rl.setPrompt('gcli>')
    rl.prompt();
}


var addSubShell = function(name,completionString)
{
    if(shellMap[name])
    {
        return false;
    }
    if(completionString)
    {
        return false;
    }
    shellMap[name] = completionString;
};

//todos  switchShell


exports.run = innerRun;
/** 添加子shell */
exports.addShell = addSubShell;


