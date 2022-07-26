// demo16_HOF_Map.js
// HOF - Higher-Order Functions

let arr = [5,7,2,3,8];
let arr2 = arr.map(x => x * 2);
console.log(arr);
console.log(arr2);

console.log("------------------------");

let arr3 = [{ mane: "Benny", age: 50 }, { mane: "Danny", age: 35 }, { mane: "Dali", age: 25 }];
let arr4 = arr3.map( x => x.age );
console.log(arr4);

