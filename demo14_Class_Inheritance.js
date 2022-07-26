// demo14_Class_Inheritance

class Person {
    constructor(Id, name) {
        this.Id = Id;
        this.name = name;
    }

    printData() {
        console.log("Id: " + this.Id);
        console.log("Name: " + this.name);
    }
}

class Student2 extends Person {
    constructor(Id, name, faculty) {
        super(Id, name)
        this.faculty = faculty;
    }

    printData() {
        super.printData();
        console.log("Faculty: " + this.faculty);
    }
}

let p1 = new Person(1, "Mosh");
let s1 = new Student2(2, "Avi", "London");

console.log(p1);
console.log(s1);
console.log("--------------------");
console.log("Printing Data of Person:");
p1.printData();
console.log("Printing Data of Student:");
s1.printData();


