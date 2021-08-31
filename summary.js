/* // primitive
1.Number
2.string
3.boolean
4.undefined
6.null
7.symbol

// non-primiive
.object */

/* // Data-typeof
let a = 5;
let b = a;
console.log(a,b)
a = 10;
console.log(a,b) */

/* 
// true-false
Falsy
1.false
2.0
3.undefined
4.null
5.empty String
6.NaN

Truthy
1.true
2.positive or negative Number
3.any String
4.empty Array
5.empty String
6.Anything that was not falsy


let x = true;
console.log(typeof x);
if(x){
    console.log('value of x',x);
}
else{
    console.log('value of x',x);
}
 */

/* 
undefined
1.variable value not assiged
2.function but didn't write return
3.function return write but didn't write anything to return 
4.parameter use in function but didn't passed
5.property does not exit in object
6.accessing arrayelement out of range
7.accessing deleted array element 

---------
null 
only if you write as value
let fullName ={firstName:name,lasName:null}
*/

/* 
// double-triple

const a = 2;
const b = '2';
// if (a==b){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

if (a===b){
        console.log(true);
    }
    else{
        console.log(false);
    }

    // == convart variable and see only value nut === see value and type
     */
/* 
 // scope

 const name = 'sejan'; //global scope

 if(name =='sejan'){
     const myage = 25; ///block scope
     var age = 25; ///global scope
     console.log(myage)
 }

 function fullName(f,s){
     const name = f + ' ' + s;///f and s local scope
     return name;
 } */

/* 
//  closure
const friend = ['sejan','sajal','babu',3];
function closur(array){
    let counter = 0;
    return function(){
        counter++;
        return array[counter];
    }
}
let closur1 = closur(friend);
console.log(closur1());
console.log(closur1());
console.log(closur1());
 */
/* 
// callback-function

function a(name){
    name();
}
function b(){
    console.log('it came from function b');
}
a(b) */