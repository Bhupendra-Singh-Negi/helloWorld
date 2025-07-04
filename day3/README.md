
### 🚀 What You Will Learn

* What is a server in Node.js
* What is JSON and how to work with it
* Basic API and endpoint structure
* HTTP Methods: `GET`, `POST`, `PATCH`, `DELETE`
* Creating a simple server using Express.js

---

### 📌 Concepts Explained

| Concept                  | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **Server in Node.js**    | A program that prepares and delivers data to the client          |
| **JSON**                 | Lightweight, easy-to-read data format used to transfer data      |
| `JSON.parse(data)`       | Converts JSON string into a JavaScript object                    |
| `JSON.stringify(object)` | Converts a JS object into a JSON string                          |
| **API**                  | Collection of routes for data interaction                        |
| **Endpoint**             | A specific option (URL + Method) in an API                       |
| **Data Methods**         | `GET`, `POST`, `PATCH`, and `DELETE` used for data communication |

---

### 🔧 How to Run This Project

1. **Install dependencies**

   ```bash
   npm install express
   ```

2. **Create your server file**
   Example:

   ```js
   const express = require('express');
   const app = express();
   const PORT = 3000;

   app.use(express.json());

   app.get('/', (req, res) => {
       res.send("Hello from Express!");
   });

   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

3. **Run the server**

   ```bash
   node server.js
   ```
