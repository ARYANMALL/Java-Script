//! ===METHODS===
//? 1. toFixed() method 
let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"
//* 2. isNaN() method
let value1 = "Hello";
let value2 = 123;
console.log(isNaN(value1)); // Output: true
console.log(isNaN(value2)); // Output: false

//* ParseFloat/ParseInt() methods
let str1 = "3.14abc";
let str2 = "42";
console.log(parseFloat(str1)); // Output: 3.14
console.log(parseInt(str2)); // Output: 42
let convertedNum1 = parseFloat(str1);
console.log(str1); // Output: "3.14abc"
console.log(convertedNum1); // Output: 3.14
console.log(typeof str1); // Output: "string"
console.log(typeof convertedNum1); // Output: "number"

//! ===ARITHMETIC OPERATORS===

//? 1. Addition (+)

let a = 5;
let b = 10;
let sum = a + b;
console.log(sum); // Output: 15

//? 2. Subtraction (-)
let difference = a - b;
console.log(difference); // Output: -5

//? 3. Multiplication (*)
let product = a * b;
console.log(product); // Output: 50

//? 4. Division (/)
let quotient = b / a;
console.log(quotient); // Output: 2                                                     

//? 5. Modulus (%)
let remainder = b % a;
console.log(remainder); // Output: 0

//? 6. Exponentiation (**)
let power = a ** 2;
console.log(power); // Output: 25

//? 7. Increment (++)
let count = 0;
count++;
console.log(count); // Output: 1

//? 8. Decrement (--)
count--;
console.log(count); // Output: 0

//! --Case Study: Budget Management for a Monthly Expense Tracker--
// A user wants to track their monthly expenses and saving using a simple JavaScript program.
// The user has a income and several expenses like rent, groceries, utilities, and entertainment.
// The program needs to calculate how much is spent, how much is spent, how much is saved, and what the percentage of the income has been spent.
/*
Scenario:
*Monthly Income: $5000
*Monthly Expenses:
*Rent: $1500
* Groceries: $600   
* Utilities: $200
* Entertainment: $300

! Operations to be performed:
1. Calculate total expenses.
2. Calculate savings (Income - Expenses).
3. Calculate the percentage of income spent on expenses.
*/

//? Step 1: Define the income and expenses
let monthlyIncome = 5000;
let rent = 1500;
let groceries = 600;
let utilities = 200;
let entertainment = 300;

//? Step 2: Calculate total expenses
let totalExpenses = rent + groceries + utilities + entertainment;
console.log("Total Expenses: $" + totalExpenses); // Output: Total Expenses: $2600

//? Step 3: Calculate savings
let savings = monthlyIncome - totalExpenses;
console.log("Savings: $" + savings); // Output: Savings: $2400

//? Step 4: Calculate the percentage of income spent on expenses
let percentageSpent = (totalExpenses / monthlyIncome) * 100;
console.log("Percentage of Income Spent: " + percentageSpent.toFixed(2) + "%"); // Output: Percentage of Income Spent: 52.00%

