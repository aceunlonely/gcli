/** gchain */
var ge = require('./gchain-engine');
var config = require('../config.js');
var path = require('path');

<<<<<<< HEAD
/**
=======
/** 
>>>>>>> 041fba05df6e5fb130ba87f4dad7ee29ea016f6e
 *  执行 gchain
 *  gchain : gchain （可以是json，可以是字符串）
 *  fPipe : first pipe ,入口pipe
 */
exports.run=function(gchain,fPipe){
    // 判断是否是字符串
    if((typeof gchain=='string')&&gchain.constructor==String)
<<<<<<< HEAD
    {
        ge.ru(gchain,fPipe);
=======
    {   
        var gch = gchain;
        if(!path.isAbsolute(gch))
        {
            gch= path.join(config.workspace,gch);
        }
        ge.run(gch);
>>>>>>> 041fba05df6e5fb130ba87f4dad7ee29ea016f6e
    }
    else
    {
        throw new Error('gchain run param (gchain) must be a string type');
    }

}