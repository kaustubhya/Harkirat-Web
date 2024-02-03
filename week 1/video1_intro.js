// node.js is the javascript runtime
// javascript and nodejs are single threaded i.e. work on a single core only, even if the machine is multi core
// asynchronous functions run tasks on a different thread than the main thread
// Compiled lang - Checks full code then gives the output (eg C++, Java)
// Interpreted lang - runs code line by line (eg JS, Python), good for browsers
// Object example


// var user1 = {
//     name: "Shukla",
//     age: 54,
//     phone: 47

//     // function doArithmetic(el1, el2, op) {
//     //     if(op === "divide") {
//     //         return op(el1, el2);

//     //     }
//     // }

//     // function divide(el1, el2) {
//     //     return el1/el2;
//     // }

// }

// console.log(user1)

// var users = ["hi", "bye","gai","chai","tie"];
// for(var i = 0; i < users.length; i++) {
//     console.log(users[i])
// }


// var arrayOfObjects = [
//     {name: "Ram", age: 12356556565},
//     {name: "Lakhan", age:45}

// ];

// console.log(arrayOfObjects[0].age);
// console.log(arrayOfObjects[1]);


// To Avoid writing these many lines multiple times, use function like below

// function myOutput(arrayOfObjects) {
//     for (var j = 0; j < arrayOfObjects.length; j++) {
//         const teddy = arrayOfObjects[j].name + "'s age is " + arrayOfObjects[j].age
//         console.log(teddy)
//     }
// }

// function + object => :)

// console.log(arrayOfObjects);


// Q. Sum of 2 numbers

// function sumAll(startIndex, endIndex) {
//     var sum = 0;
//     for(var i = startIndex; i <= endIndex; i++) {
//         sum+= i;
//     }

//     return sum;
// }

// var sum = sumAll(1, 5);
// console.log(sum);



// Q. Calculator

// function sum (index1, index2) {
//     return index1 + index2;
// }

// function multiply (index1, index2) {
//     return index1 * index2;
// }

// function subtract (index1, index2) {
//     return index1 - index2;
// }

// function divide (index1, index2) {
//     return index1 / index2;
// }

// function doArithmetic(firstEL, secondEL, arithmeticFn) {
//     return arithmeticFn(firstEL, secondEL);
// }

// var ans = doArithmetic(1, 2, sum);
// console.log(ans);


