//! ways of creating string

//single
let singleQuoteString='Hello World';
console.log(singleQuoteString);
//double
let doubleQuoteString="Hello World";
console.log(doubleQuoteString);

//template
let templateLiteralString=`Hello World`;
console.log(templateLiteralString);

//str.length
let str = "Hello World";
console.log(str.length); 

//Accessing characters in a string
let str3 = "Hello World";
console.log(str3[0]);

//ToUpperCase and ToLowerCase
let str4 = "Hello World";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

//IndexOf
let str5 = "Hello World";
console.log(str5.indexOf("o"));

//Slice
let str6 = "Hello World";
console.log(str6.slice(0, 5));

//Replace
let str7 = "Hello World";
console.log(str7.replace("World", "JavaScript"));

//Template Literals
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
let greeting = `Hello, ${name}!`;
console.log(greeting);

//Concat
let str8 = "Hello";
let str9 = "World";
console.log(str8.concat(" ", str9));

 
