// demo24_Promise_with_Function.js

// Rule 1: Async function is any function with an async operation within
// Rule 2: The only way to receive data from async function is with "Promise"

function someFunc(num) {
    let total = 0;
    setTimeout( () => total = num * 2, 2000 )
    return total;
}

let result = someFunc(10);
console.log(result); // will print "0" because the function is async




// This is how we need to use Promise to get the true value of an async function

function someFunc2(num2) {
    const prom = new Promise( resolve => 
        setTimeout( () => resolve( num2 * 2 ), 2000 )
    );
    return prom;
}
someFunc2( 10 ).then( data => console.log( data ) );
