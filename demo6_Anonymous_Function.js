// demo6_Anonymous_Function.js


// Regular function
function sumNumbers(num, num0) {
    return num + num0;
}
console.log(sumNumbers(4, 5));


// Anonymous Option 1
let f1 = function (num1, num2) {
    return num1 + num2;
}
console.log(f1(4, 6));


// Anonymous Option 2 (Lambda expression)
let f2 = (num3, num4) => num3 + num4;
console.log(f2(5, 6));

// Anonymous Option 3 (Lambda expression + Logics)
let f3 = (num5, num6) => {
    if (num5 + num6 < 10) {
        return num5 + num6;
    } else {
        return num5 * num6;
    }
}
console.log(f3(5, 7));


// Type of Anonymous function

let a1 = num => console.log(num * 2); // Get a num -> Do a function and don't return any thing

let a2 = () => console.log("Hello"); // Don't get anything -> Do a function and don't return any thing

let a3 = () => 10; // Don't get anything -> Return a Value

let a4 = num => num * 10; // Get a num -> Return a Value








