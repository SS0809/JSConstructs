// Write a program that reads 5 Random 3 Digit values 
// and then outputs the minimum
// and the maximum value
let some = [] , min = 1000 , max = 0;
for(let i = 0; i < 5; i++){
    some[i] = Math.floor(Math.random() * 900) + 100;
    if(some[i] > max) max = some[i];
    if(some[i] < min) min = some[i];
}
console.log(min + " " + max);