









/** exes must contains this exports function */
exports.callback=function(pipe,params){
    console.log('it is copy start..................................');
    if(pipe)
    {
        console.log(pipe.name  + " |" + pipe.type);
    }
    if(params)
    {
        console.log(params);
    }
    
    console.log('it is copy end..................................');

    return pipe;
}