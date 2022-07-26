
function getLength(someString) {
    return someString.length;
}
console.log(getLength("Hello"));


// This is a functions that receives an arr of string 
// and return the total length
function getArrLength(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        total += getLength(element);
    }
    return total;
}
console.log(getArrLength(["Hello", "Bye", "Vivo"]));

console.log("-------------------------");

// This is a function that receives 2 numbers and returns 
// their multiply ONLY by calls to an "add" function
function add(num1, num2) {
    return num1 + num2;
}

function multiply3(x, y) {
    let total = 0;
    for (let i = 0; i < x; i++) {
        total = add(total, y);
    }
    return total;
}
console.log(multiply3(6,4));

console.log("-------------------------");

function getFullText(array) {
    let fullText = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length < 5) {
            fullText += (element + ", ");
        }
    }
    return fullText;
}
console.log(getFullText(["bye", "Hi", "Bammbam", "David"]));
// Demo6_Anonymous_Function