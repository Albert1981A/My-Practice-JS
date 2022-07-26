// demo18_HOF_Find.js

let arr = [ { id: 1, name: "Brian" }, { id: 2, name: "Marty" }, { id: 3, name: "Babe" }, { id: 2, name: "Max" } ]

// Filter will find the object, will insert it to a new array and return the array
// Filter will insert to the array any element that it will find for the quarry
let arr2 = arr.filter( x => x.id == 2 );

// Find will find the object and return it
// Find will return the first element that it will find for the quarry
let obj = arr.find( x => x.id == 2 );

console.log(arr2);
console.log(obj);






