
var path = require('path');
var config = require('../config.js');
var fs  = require('fs')


var innerCheck = function(gchainJson)
{
    var result = {isPass: true, msg:"" };


    return result;
}


/** 内部执行函数 */
var innerRun = function(gchain,gpipe){
    var realPath = gchain;
    if(!path.isAbsolute(gchain))
    {
        var chain = String(gchain).toString().replace('.','/');
        realPath= path.join(config.workspace , chain);
    }
    //here to load xxxx.gchain.json
    var bname = path.basename(realPath);
    var gchainFilePath  = path.join(realPath,bname + '.gchain.json');
    var gchainFileContent = fs.readFileSync(gchainFilePath,'utf-8');
    if(!gchainFileContent)
    {
        throw Error('cannot find file :' +gchainFilePath);
    }
    var gchainJson = JSON.parse(gchainFileContent);
    if(!gchainJson)
    {
        throw Error('not a json file :' + gchainFilePath);
    }
    // check gchain.json 
    var r = innerCheck(gchainJson);
    if(!r.isPass)
    {
        throw Error('gchain must be according to the  standard : '+ gchainFilePath);
    }

    // now excute the chain
    var tpipe = gpipe;
    for(var i=0; i < gchainJson.gnodes.length;i++ )
    {
        var node = gchainJson.gnodes[i];
        // todos
    }
}







/** here to check chain */
exports.check =function(chain){


}

exports.run = innerRun
