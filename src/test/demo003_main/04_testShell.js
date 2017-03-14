var shell = require('../../shell/main');



if(shell.addShell('test','test1 test2 test3 tt1 tt2 abc abc1',function(line,rl){ console.log('test:' + line);}))
{
    console.log('s')

}
else
{
    console.log('f')
}
shell.switchShell('test');
shell.run('tt');