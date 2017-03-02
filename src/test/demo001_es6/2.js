/** arrow function 
// af does not have this
var f = (i) => i + 1
console.log(f(10))

var f1=(a,b) =>{ a++;b--;return a - b;}
console.log(f1(10,2));
*/


/** template string 

let lxy ={ name : "lxy" ,age : 18}
console.log(
    ` this is a demo for template string , my name is ${lxy.name}, and age is ${lxy.age}`
)

*/

/** destructuring 

let name = 'lxy'
let age =18
var lxy ={name,age}
console.log(
    ` this is a demo1 for destructuring , my name is ${lxy.name}, and age is ${lxy.age}`
)

var lxy1 ={hobby : "coding", lover :'computer',weight :12}
let {hobby,lover,height} = lxy1
console.log(
    ` this is a demo2 for destructuring , my hobby is ${hobby}, and lover is ${lover} ,and height is ${height}`
)

*/

/** default, rest */

var f2 = (name ='lxy',...hobbys)=>{
    console.log(
    ` this is a demo for default and rest , default name  is ${name}, and rest hobbies  is ${hobbys} ,rest length is ${ hobbys.length}`)
};

f2();
f2('lxy','h1','h2','h3')