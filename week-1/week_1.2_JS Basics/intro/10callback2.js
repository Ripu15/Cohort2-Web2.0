function greet(){
    console.log("Hello World !!! ");
}

setTimeout(greet,2*1000);//arg1: which function to call after arg2: milli-secs
//setInterval(greet,2*1000);//arg1: call function after every arg2 seconds

//it calls func at arg1 after every interval specified at arg2
setInterval(greet, 1*1000);
