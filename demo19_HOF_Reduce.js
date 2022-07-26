// demo19_HOF_Reduce.js

let arr = [5,7,3,8,3,9];
let total = arr.reduce( (x,y) => x + y );

// The way "reducer" function works:
// x=5 y=7 => res=12
//              x=12 y=3 => res=15
//                            x=15 y=8 => res=23
//                                          x=23 y=3 = res=26
//                                                       x=26 y=9 res=35
console.log(total); // will print 35


let arr2 = [35, 5, 10]
let total2 = arr2.reduce( (x,y) => x - y );
// The way "reducer" function works:
// x=35 y=5 => res=30
//               x=30 y=10 => res=20
console.log(total2); // will print 20


let arr3 = [5,7,3,9,3,8];
console.log( "An array of numbers: " + arr3 );
// Reduce can find the min num like this:
let minNum = arr3.reduce( (x,y) => x < y ? x : y );
console.log( "The minimum number is: " + minNum );
// Reduce can find the max num like this:
let maxNum = arr3.reduce( (x,y) => x > y ? x : y );
console.log( "The maximum number is: " + maxNum );
