// demo26_Promise_and_reject.js

let prom = new Promise( ( resolve, reject ) => 
    {
        setTimeout( () => 
        {
            // Returning Data
            resolve("ok")
            // Returning Error
            reject("Some Error")
        }, 2000 );
    });

prom.then( data => console.log( data ) ).catch( err => console.log( err ) );

console.log("End");

// resolve is like the "f" function in "demo21_HOF_function_Pointer.js"
