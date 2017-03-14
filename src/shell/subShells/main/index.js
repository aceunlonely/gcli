
var currentCompletion = "help test test1 teab";



























exports.completion = currentCompletion;
exports.exeFunction= function(line,rl){
    switch(line)
    {
        case 'hello':
            console.log(' world');
            break;
        default:
            console.log('what you say is ' + line);
            break;

    }

}