// Enter 3 Numbers do following arithmetic operation 
// and find the one that
// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;
let max = result1;
let min = result1;
if(result2 > max) max = result2;    
if(result3 > max) max = result3;
if(result4 > max) max = result4;
if(result2 < min) min = result2;
if(result3 < min) min = result3;
if(result4 < min) min = result4;
console.log("Maximum: " + max + " Minimum: " + min);
// EXAMPLE
// node ifelse/arithmetic.js 1 2 3