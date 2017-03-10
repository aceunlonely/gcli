/** exes must contains this exports function */
exports.callback=function(pipe,params){
    console.log('it is show start..................................');

    
    var p = pipe;
    while(p.pre)
    {
        p = p.pre;

        console.log("pipe has its pre :" + p.name );

    }
    console.log('it is show end..................................');

    return pipe;
}