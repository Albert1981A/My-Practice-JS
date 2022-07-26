class Person 
{
    constructor(outerName, outerAge) {
        this.name = outerName;
        this.age = outerAge;
    }

    // creating a function inside a Class is 
    // without the word "function"
    printPerson() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }

    printBirthYear(currentYear) {
        console.log(currentYear - this.age);
    }
}

let p1 = new Person("Avi", 20);
p1.printPerson();
p1.printBirthYear(2022);

let p2 = new Person("Dana", 35);
let p3 = new Person("John", 40);

console.log("---------------------");

let arr = [p1, p2, p3];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.printPerson();
}

