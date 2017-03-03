/** gchain */
var ge = require('./gchain-engine');



/**
 *  执行 gchain
 *  gchain : gchain （可以是json，可以是字符串）
 */
exports.run=function(gchain,fPipe){
    // 判断是否是字符串
    if((typeof gchain=='string')&&gchain.constructor==String)
    {


    }
    else
    {
        throw new Error('gchain run param (gchain) must be a string type');
    }

}