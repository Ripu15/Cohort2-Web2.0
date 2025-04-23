function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }

  // DRY(Don't Repeat Yourself) issue
  // almost same kind of two funcs:
  //sumOfSquares and sumOfCubes
  function sumOfSquares(a, b) {
    let square1 = square(a);//func call
    let square2 = square(b);//func call
    return square1 + square2;
  }

  function sumOfCubes(a, b) {
    let cube1 = cube(a);//func call
    let cube2 = cube(b);//func call
    return cube1 + cube2;
  }
  
  let ans1 = sumOfSquares(1, 2);//call to sumOfSquares func
  console.log(ans1);

  let ans2 = sumOfCubes(1, 2);//call to sumOfCubes func
  console.log(ans2);