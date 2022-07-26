let arr1 = [7, 4, 2, 8];
console.log(arr1.length);  // will print 4
let arr2 = [7, "Hello", true, [5, 3, 8] ];
console.log(arr2.length);  // will print 4
console.log(arr2[1]);      // will print "Hello"
console.log(arr2[3] [2]);  // will print 8

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}
