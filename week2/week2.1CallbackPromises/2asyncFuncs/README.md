Time can be decreased with:
1. Parallelizing by delgating task to some other function
2. Context Switching
example of async func is reading a file from file system, as it can take 1s or might be 10s , 
so, you can not waste the main java script thread to wait on it, file reading can be delegated
to some other function

can JS delegate and context switch ?
Yes  , by using async functions.

some aysc functions:
1. setTimeout
2. fs.readFile- to read a file from your file system
3. Fetch - to fetch some data from an API end point

When async functions are completed, they wait in event queue ,
When main thread gets free then event loop runs, that see if any task is in event queue
amd pulls it to the stack

Promises :
are syntactical sugar that makes code more readable
-Promise is a class that makes callbacks and async functions slightly more readable


