function ripuAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there !!! ");
        },3000);
    });
    return p;
}

async function main(){
    let value = await ripuAsyncFunction();
    console.log("Hi there...");
}

main();
console.log("After main()");