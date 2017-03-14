var shell = require('../../shell/main');



shell.addShell('test','test1 test2 test3 tt1 tt2 abc abc1');
shell.switchShell('test');
shell.run('tt');