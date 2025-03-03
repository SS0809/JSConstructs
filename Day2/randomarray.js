// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.


var numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}
var max = numbers[0];
var second_max = numbers[0];
var min = numbers[0];
var second_min = numbers[0];
for(let i=0;i<numbers.length;i++)
{
    if(second_max < numbers[i])
    {
        if(max < numbers[i])
        {
            second_max = max;
            max = numbers[i];
        }
        else
        {
            second_max = numbers[i];
        }
    }
    if(second_min > numbers[i])
    {
        if(min > numbers[i])
        {
            second_min = min;
            min = numbers[i];
        }
        else
        {
            second_min = numbers[i];
        }
    }
}

console.log("Array: " + numbers);
console.log("Second Largest: " + second_max);
console.log("Second Smallest: " + second_min);
