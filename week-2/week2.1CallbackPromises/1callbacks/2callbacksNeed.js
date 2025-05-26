function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }

  // DRY(Don't repeat yourself) issue
  // almost same kind of two funcs:
  //sumOfSquares and sumOfCubes

  //using callback function it becomes generic
  //passing function(callback [here]) as an argument
  function sumOfSomething(a, b, callback) {
    let one = callback(a);//func call
    let two = callback(b);//func call
    return one + two;
  }

//   function sumOfCubes(a, b) {
//     let cube1 = cube(a);//func call
//     let cube2 = cube(b);//func call
//     return cube1 + cube2;
//   }
  
  let ans1 = sumOfSomething(1, 2, square);//call to sumOfSquares func
  console.log(ans1);

  let ans2 = sumOfSomething(1, 2, cube);//call to sumOfCubes func
  console.log(ans2);