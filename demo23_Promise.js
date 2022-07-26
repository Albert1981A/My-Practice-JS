// demo23_Promise.js

let prom = new Promise( resolve => 
    {
        setTimeout( () => resolve("ok"), 2000 );
    });

prom.then( data => console.log( data ) );

console.log("End");

// resolve is like the "f" function in "demo21_HOF_function_Pointer.js"