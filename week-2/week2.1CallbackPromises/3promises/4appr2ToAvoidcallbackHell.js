//Promise is a class in JS
//promises
function myOwnSetTimeout(duration) {
    let p = new Promise(resolve,duration);
    
    return p;
  }
  
  const ans = myOwnSetTimeout(1000);
  //console.log(ans);
  ans.then(function () {
      console.log("log the first thing");
    });