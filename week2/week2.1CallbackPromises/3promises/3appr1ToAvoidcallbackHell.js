//wrapping another async function
function myOwnSetTimeout(fn, duration){
    setTimeout(fn,duration);
}
//calling function
myOwnSetTimeout(function(){
    console.log("Hi There ...");
}, 1000);