/** exes must contains this exports function */
exports.callback=function(pipe,params){
    console.log('it is alert start..................................');
    if(pipe)
    {
        console.log('alert('+ (pipe.value | pipe.name)+')');
    }

    console.log('it is alert end..................................');

    return pipe;
}