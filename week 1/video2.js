// Q. Pattern 1

/*
**
****
******
********
**********
*/

// function createPattern(numOfRows) {
//     for(var i = 0; i < numOfRows; i++) {
//         var stringToPrint = "";
//         for(var j = 0; j < i + 1; j++) {
//             stringToPrint = stringToPrint + "**" 
//         }
//         console.log(stringToPrint);
//     }
// }

// createPattern(5);

// Q. Pattern 2

// function printSingleFullRow(n) {
//     let star = "";
//     for(let j = 0; j < n; j++) {
//         star = star + "*";   // column loop
//     }
//     console.log(star)
// }

// function printingMiddleRows(n) {

//     let star = "*";
//     for(let j = 0; j < n-2; j++) {
//         star = star + " ";

//     }

//     star = star + "*";
//     console.log(star);     
// }


// // combined function 
// function printWholeCombinedPattern(n) {
//     printSingleFullRow(n)
//     for(let i = 0; i < n - 2; i++) { // for rowa
//         printingMiddleRows(n)
    
//     }

//     printSingleFullRow(n)


// }

// printWholeCombinedPattern(10)


// Single and Multi Threaded JS

// function count(first, last) {
//     var sum = 0;
//     for(let i = first; i <= last; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// var answer = count(1, 100000000000)
// console.log(answer)

// Here the single threaded nature works as follows, 

/* When it sees the keyword 'function', it skips the entire function block and moves ahead, when it sees that in variable answer, count function is called, then it enters inside the function and executes it.

If we have multiple blocks of function, the same thing happens. It skips those multiple blocks and goes inside them only when they are called.

Also this happens one after the other, hence it is called "Single Threaded Nature of JavaScript"

*/

// In case of multi-threaded, languages (like GO and C++), if a system has say 5 cores, then that language uses all 5 cores of the system to execute the operation.

// This saves us a lot of time as work is divided up into small "chunks".

// 🛑🛑🛑 We can make JS run in multi threaded nature if we split the work and run in multiple code editor windows / tabs.

// But this is non-sense, hence JS is slow. 



// Now to do complex functions in single threaded, we use the asynchronous nature of JS

// eg.
// Set Timeout Function

// Say we are doing our work in single threaded nature in one core, we can (being in one core), delegate some of our work to a friend (hypothetically) such as keeping track of time.

// By doing this, we can work hassle free

// JS engine here delegates the task to other cores here, while doing its main task on its main core. It delegates simple tasks to other cores.

// See this example:

// main thread
function count(first, last) {
    var sum = 0;
    for(let i = first; i <= last; i++) {
        sum = sum + i;
    }
    return sum;
}

// Async Task function

function printToScreen() {
    console.log("10 seconds have passed");
}

// Calling and executing the async
setTimeout(printToScreen, 10*1000);
// here we used callback, function inside the setTimeout function is calling another function
// Also 1000 = 1s, hence 10*1000 = 10s


// Calling and executing the main function
var answer = count(1, 10000)
console.log(answer)

// first the main thread starts executing and delecates the counting task of 10 sec to another core,
// the async task once if it has already counted the value, stores it in a queue, meanwhile the main thread waited for 10 s and keeps doing its task, and once it is free from its main task, took value from the queue and displayed the output.





