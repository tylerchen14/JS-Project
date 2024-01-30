let weatherform = document.querySelector('.weatherForm')
let cityinput = document.querySelector('.cityInput')
let card = document.querySelector('.card')
let apikey = "47e2a942a1f6076b9bbeaf242c997211"

weatherform.addEventListener("submit", async event => {
    event.preventDefault();
    let city = cityinput.value
    if (city) {
        try {
            let weatherdata = await getweatherdata(city);
            displayweatherinfo(weatherdata)
        }
        catch (error) {
            console.error(error);
            errordisplay(error)
        }
    } else {
        errordisplay('please enter a city');
    }
})

async function getweatherdata(city) {
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    let response = await fetch(apiurl);

    if (!response.ok) {
        throw new Error("can't fetch data");
    }
    return await response.json();
}

function displayweatherinfo(data) {
    let {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data

    card.innerHTML = "";
    card.style.display = "flex"

    let cityDisplay = document.createElement('h1')
    let tempDisplay = document.createElement('p')
    let humidityDisplay = document.createElement('p')
    let descDisplay = document.createElement('p')
    let weatherEmoji = document.createElement('p')

    cityDisplay.innerHTML = city;
    tempDisplay.innerHTML = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.innerHTML = `Humidity: ${humidity}%`
    descDisplay.innerHTML = description
    weatherEmoji.innerHTML = getweatherEmoji(id)

    cityDisplay.classList.add('cityDisplay')
    tempDisplay.classList.add('tempDisplay')
    humidityDisplay.classList.add('humidityDisplay')
    descDisplay.classList.add('descDisplay')
    weatherEmoji.classList.add('weatherEmoji')

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherEmoji)
}

function getweatherEmoji(id){
    switch (true) {
        case (id >= 200 && id < 300):
            return '⛈️';
        case (id >= 300 && id < 400):
            return '🌧️';
        case (id >= 500 && id < 600):
            return '🌧️';
        case (id >= 600 && id < 700):
            return '❄';
        case (id >= 700 && id < 800):
            return '🌫️';
        case (id === 800):
            return '☀️';
        case (id >= 801 && id < 810):
            return '☁️';
        default:
            return "❓"
    }
}


function errordisplay(message) {
    let error = document.createElement('p')
    error.innerHTML = message;
    error.classList.add('errorDisplay');

    card.innerHTML = "";
    card.style.display = "flex";
    card.appendChild(error)
}
