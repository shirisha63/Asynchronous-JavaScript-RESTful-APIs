const apiKey = "daa817dfa60e4300b1461551260207";

const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");
const icon = document.getElementById("icon");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {

    const city = cityInput.value.trim();

    if(city === ""){
        alert("Please Enter City Name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.error){
            alert(data.error.message);
            return;
        }

        cityName.textContent = data.location.name;
        temp.textContent = data.current.temp_c + " °C";
        humidity.textContent = data.current.humidity + " %";
        wind.textContent = data.current.wind_kph + " km/h";
        condition.textContent = data.current.condition.text;
        icon.src = "https:" + data.current.condition.icon;

    }

    catch(error){
        alert("Network Error");
    }

}