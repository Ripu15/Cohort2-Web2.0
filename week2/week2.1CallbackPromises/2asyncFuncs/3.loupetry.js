//run on http://latentflip.com/loupe/
//for better understanding of async arch of JS
console.log("Hi!");

setTimeout(function timeout1() {
    console.log("Click the button1 !");
}, 5000);

setTimeout(function timeout2() {
    console.log("Click the button2 !");
}, 8000);

let a =0;
for(let i =1; i <= 15 ; i++)
{
    a++;
}
console.log(a);