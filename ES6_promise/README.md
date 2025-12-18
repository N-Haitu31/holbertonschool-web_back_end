# ES6 Promises

This project introduces ES6 Promises and how to use them to handle asynchronous operations in JavaScript. It covers the basics of creating promises, consuming them, chaining them, handling errors, and combining multiple promises.

## Learning Objectives

By the end of this project, you should be able to:

- Explain what a Promise is and why it is useful.  
- Create a Promise with the `new Promise` constructor.  
- Use `.then()`, `.catch()`, and `.finally()` to consume promises.  
- Chain multiple promises to run asynchronous operations in sequence.  
- Handle errors and rejected promises properly.  
- Use `Promise.all`, `Promise.race`, and `Promise.allSettled` to work with multiple promises.  
- Understand how async/await builds on top of promises (if included in the tasks).

## Requirements

- Node.js (LTS version recommended).  
- All code should be written in modern JavaScript (ES6+).  
- Use modules (`import` / `export`).  
- Follow the project’s style guide (ESLint, if provided by the repository).  

## Files

Typical files in this project may include (names are examples):

- `0-promise.js` – returns a simple Promise from a function.  
- `1-promise_then.js` – uses `.then()` to handle a resolved promise.  
- `2-then_catch.js` – demonstrates `.then()` and `.catch()` for resolved and rejected promises.  
- `3-all.js` – shows how to use `Promise.all` to wait for multiple promises.  
- `4-race.js` – uses `Promise.race` to react to the first settled promise.  
- `5-allsettled.js` – demonstrates `Promise.allSettled` (if required).  
- `6-finally.js` – shows how `.finally()` runs after a promise settles.  

The exact filenames and tasks depend on your project instructions; adjust this list accordingly.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies (if a `package.json` is provided):

   ```bash
   npm install
   ```

3. Run examples or tests (adapt command to your project):

   ```bash
   npm run dev 0-main.js
   # or
   npm test
   ```

## Usage Examples

### Creating and returning a Promise

```js
// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('OK');
  });
}
```

### Consuming a Promise

```js
getResponseFromAPI()
  .then((response) => {
    console.log(response); // 'OK'
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Promise finished');
  });
```

### Combining multiple Promises

```js
Promise.all([promise1, promise2])
  .then(([result1, result2]) => {
    // Use both results
  })
  .catch((error) => {
    // Handle the first error
  });
```

## Best Practices

- Always handle rejected promises with `.catch()` or `try/catch` when using async/await.  
- Return promises from functions instead of nesting callbacks deeply.  
- Prefer promise chaining or async/await for readability.  
- Keep rejection reasons meaningful (e.g. use `Error` objects).

## Resources

- MDN Web Docs – “Using Promises”.  
- “Promise” section in the JavaScript language specification and modern JS tutorials.  

***

