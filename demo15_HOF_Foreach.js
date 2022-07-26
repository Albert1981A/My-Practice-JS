// demo15_HOF_Foreach.js
// HOF - Higher-Order Functions

let arr = [5,7,2,3,8];
arr.forEach(x => console.log(x*2));

// Another wey to write the same function
arr.forEach( function(x) { 
    console.log(x*2)
});

