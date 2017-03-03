/** gpipe types  */
var gpipe = require('./gpipe');






/** 获取一个空pipe */
exports.getPipeTemplate= function(type){
    var p=require('./pipes/'+ type + '.pipe.js');
    if(!p)
    {
        throw new Error('can not find your pipe template : ' + type);
    }
    return p.instance;
}


/** check Pipe interface */
exports.checkPipe =function(pipe){
    return gpipe.check(pipe)
}