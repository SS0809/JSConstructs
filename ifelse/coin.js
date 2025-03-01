// Write a program to simulate a coin flip and
// print out "Heads" or "Tails" accordingly.
let coin = Math.floor(Math.random() * 2);
if(coin == 0){
    console.log("Heads");
}else{  
    console.log("Tails");
}
// EXAMPLE
// node ifelse/coin.js