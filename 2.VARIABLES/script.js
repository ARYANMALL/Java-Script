//keyword(let,var,const)
//variable name(container)
//value

//Variable declaration and initialization

//Declaration and initialization in one line
let age=30;
console.log(age);

//Declaration first,then assignment
let country;
country="Ghana";
console.log(country);

//Multiple declarations, then assignments:
let firstName, lastName;
firstName="John";
lastName="Doe";
console.log(firstName, lastName);

//Multiple declarations in one line:
let age1=30,job='developer',country1="India";
console.log(age1,job,country1);

//!-----Primitive data types -----
//*1.Numbers
let age2=28;
let price=19.90;
console.log(typeof age2);
console.log(typeof price);

//*2.Strings
let greeting="Good morning";
console.log(typeof greeting);

//*#.Boolean
let isStudent=true;
console.log(typeof isStudent);

//*4.Undefined
let futureGoal;
console.log(futureGoal);
console.log(typeof futureGoal);

//*5.Null
let currentJob=null;
console.log(typeof currentJob);

//!-----Non-Primitive data types -----
//*1.Arrays
let fruits=["Apple","Banana","Kiwi"];
let mixedData=[true,30,199.99,"Emmanu",[1,2,3]];
console.log(fruits);
console.log(mixedData);

//*2.Objects
let person={
    firstName:"joy",
    lastName:"doe",
    age:22,
};
console.log(person);

//!-----let-----
let amount=40;
amount=120; //reassigned
console.log(amount);

//!-----const-----
const carName="Honda";
carName="Benz";  //not reassigned and show error
console.log(carName);