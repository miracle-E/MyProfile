// const sum = function(number1, number2) {
//     return number1+number2;
// }
// console.log(sum (3,4));
// console.log(sum (30,4));
// immediately invoked functuions
// (function() {
//     console.log("yes this is an IIFE");
// })();

(function (name) {
    console.log("hello " + name);
})("Chisom");

// const today = new Date();
// let output;

// output= today.getDay();

// console.log(output);
// TEMPLATE LITERALS
// Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

// Template literals can contain placeholders.
// These are indicated by the dollar sign and curly braces(${ expression }).
// The expressions in the placeholders and the text between the backticks(` `) get passed to a function.
// To escape a backtick in a template literal, put a backslash(\) before the backtick.
console.log('string text line 1\n' +
    'string text line 2');
console.log('string text line 1\n' +
    'string text line 2');
// "string text line 1
// string text line 2"
// Using template literals, you can do the same like this:
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

// EXPRESSION INTERPOLATION
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// Now, with template literals, you are able to make use of the syntactic sugar, making substitutions like this more readable:
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

// OBJECTS
// Objects are variables too.But objects can contain many values.

// This code assigns many values(Fiat, 500, white) to a variable named car:
var car = { type: "Fiat", model: "500", color: "white" };
// The values are written as name: value pairs(name and value separated by a colon).

// Object Definition
// You define(and create) a JavaScript object with an object literal:
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Accessing Object Properties
// You can access object properties in two ways:

// objectName.propertyName
// or

// objectName["propertyName"]
// Example1
person.lastName;

// Object Methods
// Objects can also have methods.

// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// The this Keyword
// In a function definition, this refers to the "owner" of the function.

// In the example above, this is the person object that "owns" the fullName function.

// In other words, this.firstName means the firstName property of this object.
// Accessing Object Methods
// You access an object method with the following syntax:

// objectName.methodName()