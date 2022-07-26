// demo21_HOF_function_Pointer.js

function sayHello() {
    console.log("Hello what's up ...");
}
// Calling using the function address
sayHello();


// Calling using mediator
function exec_func(f) {
    f();
}

console.log("Calling using mediator:");
exec_func(sayHello);

// this is good for "Callback Function"
// program A is running and sending program B a request to do some thing
// A is all so sending an address to execute after B is finish
// B know he wil execute a function but he don't know what until he will get the address