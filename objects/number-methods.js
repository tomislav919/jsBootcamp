let num = 103.941;

console.log(num.toFixed(2));

// Zaokruživanje brojeva
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


let min = 10;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


// Challange area
// 1 - 5 - true if correct - false if not correct


let makeGuess = function (guess) {
    let randomNumber = Math.ceil(Math.random() * 5);
    return guess == randomNumber;
};

console.log(makeGuess(1))