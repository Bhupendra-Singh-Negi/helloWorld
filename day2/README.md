
**🎥 Title:** *Create server in Node.js & Callback Function JavaScript*


## 📁 Project Setup

### Initialize Node.js project
```bash
npm init
````

This creates the following files:

* `package.json`: Contains metadata and dependencies.
* `package-lock.json`: Locks dependency versions for reproducibility.

---

## 🔄 Auto Restart with nodemon

Install `nodemon` globally to automatically restart the server on file changes:

```bash
npm install -g nodemon
```

Run your project:

```bash
nodemon index.js
```

---

## 📦 JavaScript Concept: Callback Function

### Example

```js
function add(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

add(2, 3, function(result) {
    console.log("Sum:", result);
});
```

---

## 🧰 Node.js Core Modules

### 1. `fs` Module (File System)

Used to create and modify files.

#### Example

```js
const fs = require('fs');

fs.appendFile('example.txt', 'Hello, World!\n', (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
```

---

### 2. `os` Module (Operating System)

Used to get system-related information.

#### Example

```js
const os = require('os');

console.log(os.userInfo());
console.log(os.platform());
console.log(os.totalmem());
```

---

## 🔄 Importing Files

You can modularize code using `require`:

```js
const myFunction = require('./myFile');
myFunction();
```

---

## 📚 External Library: Lodash

Lodash is a utility library for JavaScript.

### Install Lodash

```bash
npm install lodash
```

### Example

```js
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
console.log(_.flattenDeep(items)); // [1, 2, 3, 4]
```

---

## 📌 Summary

| Feature           | Purpose                    |
| ----------------- | -------------------------- |
| `npm init`        | Initialize Node project    |
| `fs`              | File creation & writing    |
| `os`              | System/user info           |
| `nodemon`         | Auto-restart on changes    |
| `lodash`          | Utility functions          |
| `require()`       | Import files/modules       |
| Callback function | Execute logic after action |

---
