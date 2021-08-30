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
console.log(age) //// for var out of block scope
