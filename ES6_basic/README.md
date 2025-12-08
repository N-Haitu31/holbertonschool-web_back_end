# ES6 Basics

This document provides a clear overview of the main **ES6 (ECMAScript 2015)** features introduced to modern JavaScript. ES6 brought significant improvements in syntax, structure, and readability that help developers write cleaner and more efficient code.

---

## 1. Variables: `let` and `const`

- **`let`**: Block-scoped variable that can be reassigned.
- **`const`**: Block-scoped constant that cannot be reassigned.

let count = 10;
count = 15; // ✅ allowed

const name = "John";
// name = "Jane"; ❌ Error - cannot reassign a constant

text

---

## 2. Arrow Functions

Arrow functions provide a shorter syntax and automatically bind the `this` keyword from their context.

// Traditional function
function add(a, b) {
return a + b;
}

// Arrow function
const add = (a, b) => a + b;

text

---

## 3. Template Literals

Template literals use backticks (`` ` ``) to allow string interpolation and multi-line strings.

const name = "Alice";
console.log(Hello, ${name}!); // Output: Hello, Alice!

text

---

## 4. Default Parameters

Functions can have default parameter values.

function greet(name = "Guest") {
return Hello, ${name};
}

greet(); // Hello, Guest

text

---

## 5. Destructuring Assignment

Destructuring makes it easier to extract values from arrays or objects.

// Array destructuring
const [first, second] = ["apple", "banana"];

// Object destructuring
const { name, age } = { name: "Bob", age: 30 };

text

---

## 6. Spread and Rest Operators

- **Spread (`...`)** expands arrays or objects.
- **Rest (`...`)** collects remaining values into an array.

// Spread
const numbers = ;
const more = [...numbers, 4, 5];

// Rest
function sum(...args) {
return args.reduce((a, b) => a + b);
}

text

---

## 7. Classes and Inheritance

ES6 introduced `class` syntax for object-oriented programming.

class Person {
constructor(name) {
this.name = name;
}
greet() {
console.log(Hi, I'm ${this.name});
}
}

class Student extends Person {
constructor(name, level) {
super(name);
this.level = level;
}
}

text

---

## 8. Modules: `import` and `export`

Modules allow better code organization by splitting code into separate files.

// greet.js
export function greet(name) {
return Hello, ${name};
}

// main.js
import { greet } from "./greet.js";

text

---

## 9. Promises

Promises simplify asynchronous operations compared to callbacks.

const fetchData = new Promise((resolve, reject) => {
setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData.then(data => console.log(data));

text

---

## 10. Other Useful Features

- **Enhanced Object Literals**
- **For...of loops**
- **Map and Set data structures**
- **Symbol type**
- **Iterators and Generators**

---

## Summary

ES6 modernized JavaScript, making it more readable, modular, and expressive. Mastering these features is essential for writing efficient and maintainable code in modern JavaScript applications.

---

**Author:** Your Name  
**License:** MIT