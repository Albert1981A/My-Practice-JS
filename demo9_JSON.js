// JSON - JavaScript Object Notation


// Simple JSON
let obj = { name: "Avi", age: 20 };
console.log(obj.name + ", " + obj.age);

console.log("--------------------------");

// More Complex JSON
let obj2 = {
    name: "Dana",
    age: 35,
    grades: [90,85,89,95],
    address:
    {
        city: "Tel Aviv",
        street:
        {
            name: "Bazel",
            number: 25
        }
    }
};
console.log(obj2.name + ", " + obj2.age + ", " + obj2.address.street.name);
console.log("--------------------------");
console.log(obj2.name + ", second grade: " + obj2.grades[1]);
console.log("--------------------------");
console.log(obj2);

console.log("--------------------------");

// An Array of JSON's 
let arr = [ {name: "David", age: 25}, {name: "John", age: 25} ];
// Getting "Johns" age
console.log("John age is: " + arr[1].age);
