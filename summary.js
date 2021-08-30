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

// All Equel
/*
const a = 2;
const b = 2;
 if( a==b ){
    console.log('they are equel')
}
else{
    console.log('they are not equel')
} */

/* const a = 2;
const b = '2';
if( a==b ){
    console.log('they are equel')
}
else{
    console.log('they are not equel')
} */
/* by == convart
true = 1;
false = 0; */
/* const a = 1;
const b = true;
if( a==b ){
    console.log('they are equel')
}
else{
    console.log('they are not equel')
} */

// Not Equel
/* const a = 2;
const b = '2';
if( a===b ){
    console.log('they are equel')
}
else{
    console.log('they are not equel')
} */

/* 
Not work (==) or(===) in array ,string,object;
but if use loop then it work
*/
/* 
const name = 'sejan' ///Global scope

function fullName(first,secound){
    const full = first + ' ' + secound;///full and first ,secound local scope
    return full;
}
console.log(age)//// hoisting for var but output undefined
if(name ==='sejan'){
    // const age = 25; ////block scope

    var age = 25;///global scope
    console.log(age)
}
console.log(age) //// for var out of block scope */


/*
const array = [5,7,9,5,2,'sejan'];
function closure(array){
    let counter = 0;
    return function(){
        counter++;
        return array[counter];
    }
}
/* function closure(){
    let counter = 0;
    return function(){
        counter++;
        return array[counter];
    }
} */
/*
// let counter1 = closure();
let counter1 = closure(array);
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    */
/*
// single Parameter
function wellComeMsg(name){
    name();
}
function parameterFunction(){
    console.log('My name is sejan',);
}
wellComeMsg();

// double Parameter
/* function wellComeMsg(name,parameterFunction){
    parameterFunction(name);
}
function parameterFunction(name){
    console.log('My name is ',name);
}
wellComeMsg('sejan',parameterFunction); */
