
var en = require('../../gchain');
var gpipe = require('../../gpipe');


var fpipe = gpipe.getPipeTemplate('string');
fpipe.value ='hello world';

console.log('run(g.demo001)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
en.run('g.demo001',fpipe);



console.log('run(g.demo002)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
en.run('g.demo002',fpipe);