// demo25_Promise_with_Function_2.js

function funcA( num ) {
    return new Promise( resolve =>
        setTimeout( () => resolve( num * 2 ), 2000 )
    );
}



// Option 1 to receive the data
function funcB() {
    funcA( 4 ).then( data => console.log(data) );
}
funcB();


// Option 2 to receive the data and return it!
function funcC() {
    return new Promise( resolve => {
        funcA( 5 ).then( data => resolve(data) );
    });
}
funcC().then( data => console.log( data ) ); // The function returns promise, we can get the data only with "then"


// Option 3 to receive the data and return it - async await
async function funcD() {
    let data = await funcA(6);
    return data;
}
funcD().then( data => console.log( data ) ); // The function returns promise, we can get the data only with "then"

console.log("The End!");