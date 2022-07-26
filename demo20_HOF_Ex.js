// demo20_HOF_Ex.js

// Return the total length of all the names with more than 4 characters
let arr = ["Yaron", "Dov", "Gilat", "Dana"];
console.log(arr);

let arr2 = arr.map( x => x.length );
console.log(arr2);

let arr3 = arr2.filter ( x => x > 4 );
console.log(arr3);

let total = arr3.reduce( (x,y) => x + y )
console.log(total);


console.log("------------------------------------");


// Print all the names of thous how are between 22-32 year old
let arr4 = [ { name: "Avi", age: 20 }, { name: "Ron", age: 30 }, { name: "John", age: 23 }, { name: "Dana", age: 25 } ];
let arr5 = arr4.filter( x => x.age >= 22 && x.age <= 32 )
console.log(arr5);
arr5.forEach( x => console.log(x.name) );


// Print the total of the names length
let arr6 = arr5.map( x => x.name.length );
console.log(arr6);
let total2 = arr6.reduce( ( x, y ) => x + y );
console.log(total2);

console.log("------------------------------------");
// we have an array of arrays of numbers
// Print their total sum using foreach only

let arr7 = [ [ 1, 6, 3, 9 ], [ 6, 12, 5, 21 ], [ 4, 11, 23, 1 ] ]; // Should print 102

let total3 = 0;

arr7.forEach( x => x.forEach( y => total3 += y ) );
console.log("Total3 = " + total3);

