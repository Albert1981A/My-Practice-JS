
function sayHello(name) {
    console.log("Hi... " + name);
}
sayHello("Ronny");


// Javascript does not force you to return a value.
// You can decide whether to do it or not.
// That's the Javascript flexibility.

function add(num1, num2) {
    if (num1 + num2 > 10) {
        console.log(num1 + num2);
    } else {
        return num1 + num2;
    }
}