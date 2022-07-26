
let arr = [5,6,2,9,12,4];
let first = arr[0];
let last = arr[arr.length - 1];
console.log("First + Last = " + (first + last));


console.log("First array:  " + arr);
arr[2] = arr[0] * arr[1];
console.log("Second array:  " + arr);


let arr2 = [5,5,2,12,6];
let total = 0;
for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    total += element;
}
console.log("arr2 total: " + total);


let arr3 =["Hello", "Bye", "Toda Raba", "OK"];
for (let j = 0; j < arr3.length; j++) {
    const element = arr3[j];
    if (element.length > 4) {
        console.log(element);
    }
}

let arr4 = [];
// Add item
arr4.push(5);
console.log(arr4);
arr4.push("Hello");
console.log(arr4);

// Remove item
let arr5 = [4,6,8,2,5,6];
arr5.splice(1,3);  // Will cut the array between 1 and 3 (will print 4,5,6)
console.log("New arr5: " + arr5);



