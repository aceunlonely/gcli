/** gpipe types  */
var gpipe = require('./gpipe');






/** 获取一个空pipe */
exports.getPipeTemplate= function(type){
    var p=require('./pipes/'+ type + '.pipe.js');
    if(!p)
    {
        throw new Error('can not find your pipe template : ' + type);
    }
    if(!p.get)
    {
        throw new Error('inner error : ' + type +'.pipe.js has not get')
    }
    var object =p.get();
    if(!object)
    {
        throw new Error('inner error : ' + type +'.pipe.js can not return a usefull object')
    }
    debugger;
    return p.get();
}


/** check Pipe interface */
exports.checkPipe =function(pipe){
    return gpipe.check(pipe)
}  