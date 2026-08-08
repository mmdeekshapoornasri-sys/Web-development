const apiKey = "3c78ad4935952dd8871792cc689b1e2c";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

async function getWeather(){

    const city = document.getElementById("city").value;

    if(city==""){
        alert("Please enter a city.");
        return;
    }

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    if(data.cod!="200"){
        document.getElementById("error").innerHTML="City not found!";
        document.getElementById("weather").style.display="none";
        return;
    }

    document.getElementById("error").innerHTML="";

    document.getElementById("weather").style.display="block";

    document.getElementById("cityName").innerHTML=data.name;

    document.getElementById("temp").innerHTML=
    Math.round(data.main.temp)+"°C";

    document.getElementById("condition").innerHTML=
    data.weather[0].main;

    document.getElementById("humidity").innerHTML=
    data.main.humidity+" %";

    document.getElementById("wind").innerHTML=
    data.wind.speed+" km/h";

    document.getElementById("feels").innerHTML=
    Math.round(data.main.feels_like)+"°C";

    document.getElementById("pressure").innerHTML=
    data.main.pressure+" hPa";

    document.getElementById("icon").src=
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}