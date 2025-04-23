//setTimeout() is an async func
function findSum(n){
    let ans = 0;
    for(let i=1; i<=n ; i++)
        ans += i;
    return ans;
}

function findSumTill100(){
    return console.log(findSum(1000000));
}
//seTimeout will call func 'findSumTill100' after 1s or 1000ms
//Its like delgating setTimeout() func to wait for 1s and then 
//remind the main java thread to run the func 'findSumTill100'
setTimeout(findSumTill100, 1000);
freeFunc();
//so, first java main thread run below lines, and after 1s and calculates the sum
function freeFunc(){
    console.log("freeFunc running...")
    var num = 0;
    for(let i=1; i<=1000000000 ; i++){
        num =i; 
    }
    
    console.log(num);
}
console.log("Hello World !!! ");
