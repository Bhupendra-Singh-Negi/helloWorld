// Problem 5: JSON (JavaScript Object Notation)
// You're working on a weather app. Create a JSON object representing the weather forecast for a specific day. Include properties like "date," "temperature," "conditions," and "humidity." Display the information using console.log.

var prompt = require('prompt-sync')();
const weatherForecast = {
    date: prompt("Enter the date (YYYY-MM-DD): "),
    temperature: parseFloat(prompt("Enter the temperature in Celsius: ")),
    conditions: prompt("Enter the weather conditions (e.g., sunny, rainy): "),
    humidity: parseFloat(prompt("Enter the humidity percentage: "))
}
console.log("Weather Forecast:");
console.log(`Date: ${weatherForecast.date}`);
console.log(`Temperature: ${weatherForecast.temperature}°C`);
console.log(`Conditions: ${weatherForecast.conditions}`);   
console.log(`Humidity: ${weatherForecast.humidity}%`);
