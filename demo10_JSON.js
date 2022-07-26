
// printing the bigger average between num1 and num2 values
let obj3 = {
    num1: [4,1,2,5],
    num2: [6,1,8,3],
    Student: {
        Name: "",
        ID: 111111,
        Grades: {
            num3: [4,1,9,3]
        }
    }
}

let avgNum1 = 0;
let avgNum2 = 0;

for (let i = 0; i < obj3.num1.length; i++) {
    const element = obj3.num1[i];
    avgNum1 += element
}
avgNum1 /= obj3.num1.length;

for (let i = 0; i < obj3.Student.Grades.num3.length; i++) {
    const element = obj3.Student.Grades.num3[i];
    avgNum2 += element
}
avgNum2 /= obj3.Student.Grades.num3.length;

console.log(avgNum1 + ", " + avgNum2);
if (avgNum1 < avgNum2) {
    console.log(avgNum2);
} else {
    console.log(avgNum1);
}

console.log("------------------------------");

// Print all num1 values
let arr = [[{ num1: 10 },{ num1: 40 }],[{ num1: 20}]];

// Solution 1:
console.log("num1: " + arr[0][0].num1 + " num1: " + arr[0][1].num1 + " num1: " + arr[1][0].num1);
console.log("------------------------------");
// Solution 2:
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        console.log("num1: " + element2.num1 + " ");
    }
}


