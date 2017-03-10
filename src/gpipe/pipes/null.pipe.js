
function innerGet()
{
    var pipe ={};

    //type
    pipe.type='null';

    //name 
    pipe.name='null';

    //value
    pipe.value= null;

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