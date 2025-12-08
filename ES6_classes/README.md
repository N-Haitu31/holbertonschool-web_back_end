# ES6 Classes

This project explores **ES6 classes** — a modern way to define and work with objects and inheritance in JavaScript. It focuses on the syntax, principles, and features introduced with ECMAScript 2015 (ES6), allowing for cleaner and more structured object-oriented code.

## Learning Objectives

By the end of this project, you should be able to:

- Understand what a **class** is in JavaScript.
- Define and use **constructors**, **instance methods**, and **static methods**.
- Use **inheritance** with the `extends` and `super` keywords.
- Apply **encapsulation** through class structure.
- Differentiate between **instance** and **class-level** properties.
- Create **subclasses** to reuse and extend existing logic.

## Requirements

- Node.js 14+ recommended.
- Files must be interpreted on Ubuntu 20.04 LTS using Node.js.
- JavaScript files must use the `.js` extension.
- Follow the **ESLint** configuration provided in the project.

## Usage

To test your classes, run:

node <filename>.js

text

Example:

node 0-classroom.js

text

## Example

class Student {
constructor(name, grade) {
this.name = name;
this.grade = grade;
}

displayInfo() {
console.log(${this.name} is in grade ${this.grade});
}
}

class HighSchoolStudent extends Student {
constructor(name, grade, schoolName) {
super(name, grade);
this.schoolName = schoolName;
}

displayInfo() {
console.log(${this.name} studies at ${this.schoolName}, grade ${this.grade});
}
}

const student = new HighSchoolStudent('Alice', 11, 'Greenwood High');
student.displayInfo();

text

Output:

Alice studies at Greenwood High, grade 11

text

## Resources

- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info – Classes](https://javascript.info/class)
- [ES6 Reference Guide](https://exploringjs.com/es6/)

---

**Author:** Holberton School – JavaScript ES6 Track  
**Project folder:** `ES6_classes`