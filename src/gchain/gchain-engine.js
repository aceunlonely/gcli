
var path = require('path');
var config = require('../config.js');
var fs  = require('fs')


var innerCheck = function(gchainJson)
{
    var result = {isPass: true, msg:"" };
    if(!gchainJson.name)
    {
        result.isPass=false;
        result.msg ="your chainJson must have a name";
    }
    for(var i=0; i < gchainJson.gnodes.length;i++ )
    {
        var node = gchainJson.gnodes[i];
        if(!node.type)
        {
            result.isPass=false;
            result.msg +="| your " +(i+1) + " node must have a type";
        }
        else if(node.type !='exe' && node.type!='cc')
        {
            result.isPass=false;
            result.msg+="| your "+(i+1) +" node have a wrong type";
        }
        if(!node.name)
        {
            result.isPass=false;
            result.msg +="| your "+(i+1)+" node must have a name";
        }
           
    }
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
    
    if(config.strict)
    {
        // check gchain.json 
        var r = innerCheck(gchainJson);
        if(!r.isPass)
        {
            throw Error('gchain must be according to the  standard : '+ gchainFilePath);
        }
    }

    // now excute the chain
    var tpipe = gpipe;
    for(var i=0; i < gchainJson.gnodes.length;i++ )
    {
        var node = gchainJson.gnodes[i];
        
        //type
        if(node.type == 'exe')
        {
            // get exe path by node.name
            var exePath = Path.join(realPath,'exes',node.name);
            if(config.strict)
            {
                if(!fs.existsSync(exePath))
                {
                    throw new Error("can not find the executes path :" + exePath);
                }
            }
            //now find we find the path, let's load it 
            var exe = require(exePath);
            if(config.strict)
            {
                // judge exe has its callback function
                if(!exe.callback)
                {
                    throw new Error("execute must contains a exports.callback function" + exePath);
                }
            }
            //now we call the exe
            var rPipe = exe.callback(gpipe,node.params);
            //做 类似原型链处理
            if(!rPipe && rPipe!=tpipe)
            {   
                rPipe.pre= tpipe;
                tpipe=rPipe;
            }

        }
        else if(node.type =='cc')
        {
            //recurse
            //first we should judge where is cc ,subDir or at workspace
            var subgchain = node.name;
            var nodeRealDir = String(node.name).toString().replace('.','/');
            if(fs.existsSync(path.join(realPath,"chain",nodeRealDir)))
            {
                subgchain=path.join(realPath,"chain",nodeRealDir);
            }
            var p = innerRun(subgchain,tpipe);
            //做 类似原型链处理
            if(!p && p !=tpipe)
            {
                p.pre= tpipe;
                tpipe = p;
            }
        }
    }

    return tpipe;
}







/** here to check chain */
exports.check =function(chain){
    //todo
}

exports.run = innerRun
