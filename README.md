# 🌤 Weather Dashboard

## 📌 Project Overview

The Weather Dashboard is a simple web application built using **HTML, CSS, and JavaScript**. It fetches and displays real-time weather information for any city using a public REST API. The application demonstrates asynchronous JavaScript concepts by retrieving live JSON data from the WeatherAPI service.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡 Display current temperature
- 💧 Display humidity
- 🌬 Display wind speed
- ☁ Display weather condition
- 🌤 Display weather icon
- ⚡ Uses Fetch API with async/await
- 📡 Retrieves live weather data from REST API
- ❌ Handles invalid city names and API errors

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Async/Await
- REST API
- JSON
- WeatherAPI

---

## 📂 Project Structure

```
Weather-Dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙ How It Works

1. User enters a city name.
2. Clicks the **Search** button.
3. JavaScript sends an HTTP request using the Fetch API.
4. WeatherAPI returns weather information in JSON format.
5. The application parses the JSON response.
6. Weather details are displayed dynamically on the webpage.

---

## 📋 Weather Information Displayed

- City Name
- Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)
- Weather Condition
- Weather Icon

---

## 🌐 API Used

**WeatherAPI**

Endpoint:

```
https://api.weatherapi.com/v1/current.json
```

---

## 💻 How to Run

1. Download or clone the project.
2. Open the project in Visual Studio Code.
3. Get a free API key from WeatherAPI.
4. Replace the API key in `script.js`.

```javascript
const apiKey = "YOUR_API_KEY";
```

5. Run `index.html` using Live Server.
6. Enter any city name and click **Search**.

---

## 🎯 Learning Outcomes

- Working with REST APIs
- Using Fetch API
- Understanding async/await
- Parsing JSON data
- DOM Manipulation
- Error Handling in JavaScript
- Building dynamic web applications

---

## 📸 Sample Output

```
City Name : Hyderabad

Temperature : 30°C

Humidity : 62%

Wind Speed : 14 km/h

Weather : Sunny

Weather Icon
```

---

## 👨‍💻 Author

**Shirisha Kokkera**
GitHub:"https://github.com/shirisha63" (https://github.com/shirisha63)
