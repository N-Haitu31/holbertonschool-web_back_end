# ES6 Data Manipulation

This project focuses on practicing modern JavaScript (ES6) features for working with data structures such as arrays and objects. It covers common operations like mapping, filtering, reducing, transforming collections, and building structured data.

## Learning Objectives

By the end of this project, you should be able to:

- Use ES6 syntax (arrow functions, `const`/`let`, template literals) in data manipulation code  
- Work confidently with arrays using `map`, `filter`, `reduce`, `find`, `some`, and `every`  
- Transform and aggregate data from arrays into other structures (objects, maps, grouped lists)  
- Use the spread operator (`...`) and rest parameters to copy, merge, and reshape data  
- Manipulate objects using object shorthand, computed property names, and destructuring  
- Understand and use `Set` and `Map` for specific data manipulation use cases  

## Technologies

- Node.js 20.x  
- npm 9.x  
- JavaScript ES6 (ECMAScript 2015)  
- Jest (unit testing)  
- ESLint (Airbnb-based configuration)

## Project Structure

Typical files in this project include:

- Utility functions for:
  - Filtering and mapping arrays
  - Reducing arrays to aggregated values (sums, counts, indexes)
  - Converting arrays to objects keyed by identifiers
  - Updating items in an array immutably
- Test files that validate the behavior of each function using Jest
- Configuration files:
  - `package.json` – scripts and dependencies
  - `babel.config.js` – Babel configuration (if needed)
  - ESLint configuration for style and static analysis

## ES6 Features Used

Some ES6 features commonly used in this project:

- `const` and `let` for block-scoped variables  
- Arrow functions for concise callbacks:
  - `array.map(item => item.property)`  
- Template literals for readable string construction:
  - `` `User ${user.name} has id ${user.id}` ``  
- Spread operator:
  - Copying arrays: `const copy = [...array];`
  - Merging arrays: `const merged = [...a, ...b];`
  - Shallow copying objects: `const clone = { ...obj };`
- Rest parameters:
  - `function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }`
- Object enhancements:
  - Property shorthand: `{ id, name }`
  - Computed properties: `{ [keyName]: value }`
  - Method shorthand: `methodName() { ... }`

## How to Run

1. Install dependencies:

   ```
   npm install
   ```

2. Run the tests:

   ```
   npm test
   ```

3. (If configured) Run a specific script:

   ```
   npm run lint     # run ESLint
   npm run dev      # run a dev script if provided
   ```

## Good Practices

- Prefer pure functions: avoid mutating input arrays/objects when possible; return new values instead.  
- Use descriptive function and variable names that reflect the data being manipulated.  
- Keep functions small and focused on a single responsibility.  
- Add tests for each edge case (empty arrays, missing properties, invalid inputs).
