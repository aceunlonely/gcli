
function innerGet()
{
    var pipe ={};

    //type
    pipe.type='string';

    //name 
    pipe.name='string';

    //value
    pipe.value=undefined;

    //ext
    pipe.ext={};

    //check
    pipe.check = function(){
        return true;
    }
    return pipe;
}

//输出pipe
exports.getInstance = innerGet;

exports.getObject = innerGet;

exports.get = innerGet;