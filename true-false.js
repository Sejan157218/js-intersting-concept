/* 
Falsy---
1.false
2.0
3.empty string
4.undefined
5.null
6.NaN--not a number

-------------------
Truthy
1.true
2.number(positive or negetive)
3.any string including single whitespace,'0','false'
4.[]--empty array
5.{}--empty string
6.Anything else that is not false will be truthy
 */


let x = false;
console.log('value of x',x)
if(x){
    console.log('Variable is truthy',x)
}
else{
    console.log('Variable is falsy',x)
}