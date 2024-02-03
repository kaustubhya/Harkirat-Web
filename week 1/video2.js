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

function count(first, last) {
    var sum = 0;
    for(let i = first; i <= last; i++) {
        sum = sum + i;
    }
    return sum;
}

var answer = count(1, 1000000000000000000000000)
console.log(answer)

// Here the single threaded nature works as follows, 

/* When it sees the keyword 'function', it skips the entire function block and moves ahead, when it sees that in variable answer, count function is called, then it enters inside the function and executes it.

If we have multiple blocks of function, the same thing happens. It skips those multiple blocks and goes inside them only when they are called.

Also this happens one after the other, hence it is called "Single Threaded Nature of JavaScript"

*/

// In case of multi-threaded, languages (like GO and C++), if a system has say 5 cores, then that language uses all 5 cores of the system to execute the operation.

// This saves us a lot of time as work is divided up into small "chunks".




