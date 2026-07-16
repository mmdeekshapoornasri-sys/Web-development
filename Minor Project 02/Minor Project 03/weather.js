const apiKey = "8a9f4d234c1f716b0f75369fd896c9e1";

document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText =
            `🌡 Temperature : ${data.main.temp} °C`;
        document.getElementById("weather").innerText =
            `☁ Weather : ${data.weather[0].description}`;
        document.getElementById("humidity").innerText =
            `💧 Humidity : ${data.main.humidity}%`;
        document.getElementById("wind").innerText =
            `🌬 Wind Speed : ${data.wind.speed} m/s`;

    }
    catch(error){
        alert(error.message);
    }

}