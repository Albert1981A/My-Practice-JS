// demo27_Promise_and_async.js


let arr = [1,2,3,4,5,6];

function funcA( arr ) {
    return new Promise( resolve =>
        setTimeout( () => 
        {
            let total = arr.reduce( ( x, y ) => x + y );
            let avg = total / arr.length;
            resolve( avg );
        }, 2000 )
    );
}


// Option 1
function funcB( arr ) {
    return new Promise( resolve => 
        funcA( arr ).then( data => resolve( data ) )
    );
}
funcB( arr ).then( data => console.log(data) );


// Option 2
async function funcC( arr ) {
    let res = await funcA( arr );
    return res;
}
funcC( arr ).then( data => console.log(data) );


console.log("The End !");