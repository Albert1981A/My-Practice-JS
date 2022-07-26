// Ex03_Promise.js

// Creating a function that receives the array[1,2,3,4,5,6] and return the average after 2 seconds

function getAvg(arr) {
    return new Promise( resolve =>
        setTimeout( () => resolve( arr.reduce( ( (x,y) => x + y ) ) / arr.length ), 2000 )
    );
}

let arr = [1,2,3,4,5,6];
getAvg( arr ).then( data => console.log( data ) );
console.log("The End !");