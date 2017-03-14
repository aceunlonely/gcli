//var
var mainShell = require('./subShells/main');

var currentCompletion = mainShell.completion;

var shellMap = {};
var currentShell = 'gcli';
var runState = false;
var currentFunction = mainShell.exeFunction;




const readline = require('readline');
function completer(line) {
  var completions = currentCompletion.split(' ');
  const hits = completions.filter((c) => { return c.indexOf(line) === 0 });
  var showLine = line;
  var showMetion =hits.length ? hits : completions;
  return [showMetion, showLine];
}

var rl=null;

var innerRun = function(params){
     rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        completer: completer,
        historySize : 50,
    });
    
    rl.on('line', (line) => {
        if(currentFunction)
        {
            currentFunction(line,rl);
        }
    rl.prompt();
    }).on('close', () => {
    console.log('good bye');
    process.exit(0);
    });

    rl.on('SIGINT', () => {
        if(currentShell == 'gcli')
        {
            rl.question('exit?(yes)', (answer) => {
                if (answer == "") {rl.pause();return;}
                if (answer.match(/^y(es)?$/i)) {rl.pause();return;}
                rl.prompt();
            });
        }
        else
        {
            innerSwitchShell('gcli');
        }
    });

    runState = true;
    rl.setPrompt( currentShell+'>')
    rl.prompt();
}


var addSubShell = function(name,completionString,exeFunction)
{
    if(shellMap[name])
    {
        return false;
    }
    if(!completionString)
    {
        return false;
    }
    shellMap[name] = {
        completion : completionString,
        exe : exeFunction};
};

//switchShell
var innerSwitchShell = function(name){
    if(shellMap[name])
    {
        currentShell = name;
        currentCompletion = shellMap[name].completion;
        currentFunction = shellMap[name].exe;
        console.log('switch to ' + name);
        if(runState)
        {
            rl.setPrompt(currentShell +'>');
            rl.prompt();
        }
    }
};


//initials
addSubShell('gcli',currentCompletion,mainShell.exeFunction);

exports.run = innerRun;
/** 添加子shell */
exports.addShell = addSubShell;

exports.switchShell = innerSwitchShell;


