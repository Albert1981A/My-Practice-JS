function amount(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === true) {
            total++;
        }
    }
    console.log(total);
}
const arr = [true, false, true, false, true, true, true, false];
amount(arr);


function multiply(arr2) {
    let total = 1;
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        total *= element;
    }
    console.log(total);
}
const arr2 = [5,2,3];
multiply(arr2);


function multiply2(num1, num2, num3) {
    const total = num1 * num2 * num3;
    return total;
}
console.log(multiply2(5,2,4));



function theShortOne(word1, word2) {
    if (word1.length > word2.length) {
        return word2;
    } else if (word1.length < word2.length) {
        return word1;
    } else {
        return "They are equals";
    }
}
console.log(theShortOne("Hello", "Bye"));
console.log(theShortOne("Vivo", "Bonbon"));
console.log(theShortOne("Benny", "Denny"));



function shortOneLength(word1, word2) {
    if (word1.length > word2.length) {
        return word2.length;
    } else {
        return word1.length;
    }
}
console.log(shortOneLength("Hello", "Bye"));
console.log(shortOneLength("Vivo", "Bonbon"));
console.log(shortOneLength("Benny", "Denny"));


function createArr(length) {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(createArr(5));

