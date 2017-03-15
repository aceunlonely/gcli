
var currentCompletion = "help run exe make delete del ls list show sync";


exports.completion = currentCompletion;
exports.exeFunction= function(line,main){
    //命令格式解析
    
    switch(line)
    {
        case 'help':
            
            break;
        default:
            console.log('what you say is ' + line);
            break;

    }
}