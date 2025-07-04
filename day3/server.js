const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);  
console.log(jsonObject.name); // Output: John


const jsonStringified = JSON.stringify(jsonObject);
console.log(jsonStringified); // Output: {"name":"John","age":30,"city":"New York"}

console.log(typeof jsonStringified) // Output: string

