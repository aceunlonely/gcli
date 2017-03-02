/** let 
let a =10;
var b =10;

while(1){
    let a =20;
    var b =30;
    console.log(a);
    console.log(b);
    break;
};
console.log(a);
console.log(b);
*/

/** const */
const fs = require('fs');
//fs = "abc";


/** class extends super */
class Animal{
    constructor(){
        this.type ='animal'
    }

    say(say)
    {
        console.log(this.type + ' says ' + say)
    }
}

let an = new Animal();
an.say('hello world!')

class Cat extends Animal{
    constructor()
    {
        super();
        this.type='Cat'
    }
}

let cat = new Cat()
cat.say('hello')
