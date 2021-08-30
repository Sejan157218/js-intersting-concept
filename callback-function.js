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