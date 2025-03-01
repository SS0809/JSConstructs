// Write a program that takes day and month from the command line 
// and prints true if day of month is between 
// March 20 and June 20, false otherwise.
let day = process.argv[2];
let month = process.argv[3];
let isTrue = false;
if((month == 3 && day >= 20) || (month == 4 || month == 5) || (month == 6 && day <= 20)){
    isTrue = true;
}
console.log(isTrue);
// EXAMPLE
// node ifelse/date.js 20 5