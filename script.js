/**************************************
 * AXIA JavaScript Practical Exam
 * Name: (Your Name)
 * Month: Third Month
 **************************************/

/* ================================
   1. Even or Odd Checker
================================ */
let number = 7; // Change the number to test

if (number % 2 === 0) {
  console.log(number + " is Even");
} else {
  console.log(number + " is Odd");
}

/* ================================
   2. Age Eligibility Checker
================================ */
let age = 16; // Change age to test

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

/* ================================
   3. Grade Evaluator
================================ */
let score = 65; // Student score

if (score >= 70) {
  console.log("Grade: A");
} else if (score >= 60) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}

/* ================================
   4. Login Validation
================================ */
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

/* ================================
   5. Product Discount Calculator
================================ */
let product = {
  name: "Laptop",
  price: 200000,
  isMember: true
};

let finalPrice;

if (product.isMember) {
  finalPrice = product.price * 0.9; // 10% discount
} else {
  finalPrice = product.price;
}

console.log("Final Price:", finalPrice);
