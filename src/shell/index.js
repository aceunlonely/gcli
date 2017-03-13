













exports.run = function(){

    process.stdout.write(">>>>>>");
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data',(chunk)=>{
        //http://cnodejs.org/topic/57de52197e77820e3acfdfd2

        process.stdout.write(chunk);
    });
}