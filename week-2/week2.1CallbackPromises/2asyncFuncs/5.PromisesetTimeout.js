function ripuAsyncFunction(){
    let p = new Promise(function(resolve){
        //it calls resolve after 2-secs
        setTimeout(resolve,2000)
    });
    return p;
}

const value = ripuAsyncFunction();
console.log(value);
//it will be called after the promise is resolved
value.then(function(){
    console.log("Hi... There !!! ");
})