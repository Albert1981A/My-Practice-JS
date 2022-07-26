
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = new Array(4);
        for (let i = 0; i < grades.length; i++) {
            this.grades[i] = grades[i];
        }
    }

    getPersonalData() {
        let dataArr = [];
        dataArr.push(this.name);
        dataArr.push(this.age);
        return dataArr;
    }

    getGradesAvg() {
        let total = 0;
        let count = 0;
        for (let i = 0; i < this.grades.length; i++) {
            
            if (this.grades[i] == null) {
                console.log("Im Here!");
                return (total / count);
            } else {
                total += this.grades[i];
                count++;
                console.log("Check total: " + total);
                console.log("Check count: " + count);
                
            }           
        }
        console.log("Im OUT!");
        return (total / count);
    }

    addGrade(grade) {
        // console.log(this.grades[this.grades.length-1]);
        if (this.grades[this.grades.length-1] == null) {
            for (let i = 0; i < this.grades.length; i++) {
                if (this.grades[i] == null) {
                    this.grades[i] = grade;
                    console.log("New Grade arr (Check1): " + this.grades);
                    return;
                }
            }
            console.log("New Grade arr (Check2): " + this.grades);
        } else {
            console.log("Grades are full");
        }
    }
}

let s1 = new Student("Avi", 30, [85,90,94]);
console.log(s1);
console.log("-----------------------------");

let arr1 = s1.getPersonalData();
console.log("Get Personal Data: " + arr1);
console.log("-----------------------------");

let avg1 = s1.getGradesAvg();
console.log("Get Grades Average: " + avg1);  // should print 89.6
console.log("-----------------------------");

console.log("Enter new Grades 1: ");
s1.addGrade(80)
console.log("-----------------------------");

console.log("Enter new Grades 2: ");
s1.addGrade(85)
console.log("-----------------------------");

let avg2 = s1.getGradesAvg();
console.log("Get Grades new Average: " + avg2); // should print 87.25
console.log("-----------------------------");







// 1:58:20