// weather

const API_KEY = 'a17cdecf7c6f79f4e53948ae09ce780d';

function onGeoOk(position) {
    const cityCreate = document.querySelector("#city");
    const weatherCreate = document.querySelector("#weather")
    const weatherImage = document.querySelector("#weatherImage")

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            cityCreate.innerText = `📍${data.name}`
            weatherCreate.innerText = Math.round(data.main.temp) + `˚C  ${data.weather[0].main}`;
            const iconImg = document.createElement('img');
            const iconID = data.weather[0].icon;
            iconImg.src = `https://openweathermap.org/img/wn/${iconID}@2x.png`
            weatherImage.prepend(iconImg);
        })
};

function onGeoErr() {
    alert("Error! No Weather for you!")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);