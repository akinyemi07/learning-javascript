let secretNumber = 7;
let guess = Number(prompt("Guess the number:"));

if (guess < secretNumber) {
  console.log("Too low!");
} else if (guess > secretNumber) {
  console.log("Too high!");
} else {
  console.log("Correct!");
}

