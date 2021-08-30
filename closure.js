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

// let counter1 = closure();
let counter1 = closure(array);
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());
    console.log(counter1());