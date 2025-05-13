//a program to print tickets based on age 
let age = prompt("Enter your age:");
age = Number(age);

let price;

if (age < 12) {
  price = 5;
} else if (age < 18) {
  price = 10;
} else if (age < 60) {
  price = 20;
} else {
  price = 15;
}

console.log(`Your ticket price is $${price}`);

