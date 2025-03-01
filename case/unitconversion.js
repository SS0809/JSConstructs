// Write a program that takes User Inputs and 
// does Unit Conversion of
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

let choice = process.argv[2];
let value = process.argv[3];
let result = 0;
switch(choice){
    case "1":
        result = value * 12;
        break;
    case "2":
        result = value / 3.281;
        break;
    case "3":
        result = value / 12;
        break;
    case "4":
        result = value * 3.281;
        break;
    default:
        result = "Invalid Input";
}
console.log(result);
// EXAMPLE
// node case/unitconversion.js 1 5