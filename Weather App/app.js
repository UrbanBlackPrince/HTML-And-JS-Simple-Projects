let weather = {
    "apiKey": "a9049d80ce88eb7f711e06ae1c4a88f7",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid="
            + this.apiKey
        )
            .then((responce) => responce.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(temp)
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C"
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "km/h"
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);

    }
}

document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();
    })

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    })

weather.fetchWeather("Primorsko");