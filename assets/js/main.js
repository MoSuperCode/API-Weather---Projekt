// CRUD Model : Create, Read, Update, Delete

// create: POST
// read: GET
// update: PUT
// delete: DELETE



let localTimeOutput = document.getElementById("localTimeOutput");
let windOutput = document.getElementById("windOutput");
let cloudinessOutput = document.getElementById("cloudinessOutput");
let skyOutput = document.getElementById("skyOutput");
let pressureOutput = document.getElementById("pressureOutput");
let humidityOutput = document.getElementById("humidityOutput");
let sunriseOutput = document.getElementById("sunriseOutput");
let sunsetOutput = document.getElementById("sunsetOutput");
let coordsOutput = document.getElementById("coordsOutput");
let windDirection;
let temperatureOutput = document.createElement("p");
let imgIcon = document.createElement("img");








function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    console.log(city);

    document.querySelector("div").appendChild(imgIcon);

    document.querySelector("div").appendChild(temperatureOutput);



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=661761509dd76637b50a6a59dbb6daa5&units=metric 
    `)

        .then((response) => response.json())
        .then((data) => {

            let i = data.wind.deg;
            if (i >= 349) {
                windDirection = +i + "° -=- N";
            } else if (i <= 11) {
                windDirection = +i + "° -=- N";
            } else if (i >= 12 && i <= 33) {
                windDirection = +i + "° -=- NNE";
            } else if (i >= 34 && i <= 56) {
                windDirection = +i + "° -=- NE";
            } else if (i >= 57 && i <= 78) {
                windDirection = +i + "° -=- EN";
            } else if (i >= 79 && i <= 101) {
                windDirection = +i + "° -=- E";
            } else if (i >= 102 && i <= 123) {
                windDirection = +i + "° -=- ESE";
            } else if (i >= 124 && i <= 146) {
                windDirection = +i + "° -=- SE";
            } else if (i >= 147 && i <= 168) {
                windDirection = +i + "° -=- SSE    ";
            } else if (i >= 169 && i <= 191) {
                windDirection = +i + "° -=- S";
            } else if (i >= 192 && i <= 213) {
                windDirection = +i + "° -=- SSW";
            } else if (i >= 214 && i <= 236) {
                windDirection = +i + "° -=- SW";
            } else if (i >= 237 && i <= 258) {
                windDirection = +i + "° -=- WSW    ";
            } else if (i >= 259 && i <= 281) {
                windDirection = +i + "° -=- W";
            } else if (i >= 282 && i <= 303) {
                windDirection = +i + "° -=- WNW    ";
            } else if (i >= 304 && i <= 326) {
                windDirection = +i + "° -=- NW";
            } else if (i >= 327 && i <= 348) {
                windDirection = +i + "° -=- NNW    ";
            }
            imgIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            temperatureOutput.innerText = data.main.temp + "°";

            console.log(data);



            const localTime = new Date().getTime();
            localTimeOutput.innerText = (new Date(localTime - 3600 * 1000 + data.timezone * 1000)).toLocaleTimeString("de-DE");
            windOutput.innerHTML = `Speed:${data.wind.speed} <br> ${windDirection}`;

            skyOutput.innerText = data.weather[0].description;

            cloudinessOutput.innerText = data.clouds.all + "%";

            pressureOutput.innerText = data.main.pressure + " mbar";

            humidityOutput.innerText = data.main.humidity + "%";

            sunriseOutput.innerText = (new Date(data.sys.sunrise * 1000 - 3600 * 1000 + data.timezone * 1000)).toLocaleTimeString("de-AT");

            sunsetOutput.innerText = (new Date(data.sys.sunset * 1000 - 3600 * 1000 + data.timezone * 1000)).toLocaleTimeString("de-DE");

            coordsOutput.innerHTML = `lat: ${data.coord.lat} <br> lon: ${data.coord.lon}`;
        });




}




