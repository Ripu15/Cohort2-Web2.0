function sum(num1,num2,funcToCall){ //callback
    let result = num1+num2;
    funcToCall(result);
}

function displayResult(data){
    console.log("Result of sum is :" + data);
}

function displayResultPassive(data){
    console.log("Sum's result is :" + data);
}
//you are allowed to call only one function after this
//How will you displayResult of a sum

const ans = sum(1,10,displayResult);
