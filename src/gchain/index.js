/** gchain */
var ge = require('./gchain-engine');
var config = require('../config.js');
var path = require('path');


/**
 *  执行 gchain
 *  gchain : gchain （可以是json，可以是字符串）
 *  fPipe : first pipe ,入口pipe
 */
exports.run=function(gchain,fPipe){
    // 判断是否是字符串
    if((typeof gchain=='string')&&gchain.constructor==String)
    {
        var gch = gchain;
        ge.run(gch);
    }
    else
    {
        throw new Error('gchain run param (gchain) must be a string type');
    }

}