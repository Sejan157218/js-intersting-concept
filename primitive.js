/* primitive data type 
1.Number
2.string
3.boolean
4.undifined
5.null
6.symbol

Non-primitive
1.object
*/

let a = 5;
let b = a;

console.log(a,b)
a = 51;
console.log(a,b)


const name ={name:'sejan'};
let myName = name;
console.log(name,myName)
name.name = 'sajal';
console.log(name,myName)