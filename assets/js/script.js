//set up API key
var APIkey = "64190a1a0ee53ff0dca949db8fd51871";
var city;
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var search = document.querySelector(".form-control");
var searchBtn = document.querySelector("#button-addon2");
var location = document.querySelector(".weather-location");
var weatherIcon = document.querySelector("#icon");
var tempt = document.querySelector("#temp");
var humid = document.querySelector("#humid");
var windy = document.querySelector("#wind");
var currentWeather = document.querySelector(".current-city");
var dateDisplay = moment().format("MMM Do YY");
var previousSearch = [];

//function to save the history search
function saveHistory(searchInput) {
    previousSearch.push(searchInput)
    localStorage.setItem('previousSearch', JSON.stringify(previousSearch))
}
//function to display history search
function displayHistory (){
    JSON.parse(localStorage.getItem('previousSearch', previousSearch));
}

//function for call api
function getWeatherData(city) {
    fetch(baseURL + city + '&units=imperial&appid=' + APIkey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            document.querySelector('#date').innerHTML = dateDisplay;
            location.innerHTML = data.name;
            weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            tempt.innerHTML = 'Temp: ' + data.main.temp + "°F";
            humid.innerHTML = 'Humidity: ' + data.main.humidity + "%";
            windy.innerHTML = 'Wind: ' + data.wind.speed + "m/h";


            var lon = data.coord.lon;
            var lat = data.coord.lat;

            var fiveDaysURL = 'https://api.openweathermap.org/data/2.5/forecast?&lat='
            fetch(fiveDaysURL + lat + '&lon=' + lon + '&units=imperial&appid=' + APIkey)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    document.querySelector('#date1').innerHTML = data.list[0].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';
                    console.log(data)
                    document.querySelector('#temp1').innerHTML = 'Temp:' + data.list[0].main.temp + '°F';
                    document.querySelector('#wind1').innerHTML = 'Wind: ' + data.list[0].wind.speed + ' m/h';
                    document.querySelector('#humid1').innerHTML = 'Humidity: ' + data.list[0].main.humidity + '%';

                    document.querySelector('#date2').innerHTML = data.list[8].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[1].weather[1].icon + '@2x.png';
                    document.querySelector('#temp2').innerHTML = 'Temp: ' + data.list[8].main.temp + '°F';
                    document.querySelector('#wind2').innerHTML = 'Wind: ' + data.list[8].wind.speed + ' m/h';
                    document.querySelector('#humid2').innerHTML = 'Humidity: ' + data.list[8].main.humidity + '%';

                    document.querySelector('#date3').innerHTML = data.list[16].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[2].weather[2].icon + '@2x.png';
                    document.querySelector('#temp3').innerHTML = 'Temp: ' + data.list[16].main.temp + '°F';
                    document.querySelector('#wind3').innerHTML = 'Wind: ' + data.list[16].wind.speed + ' m/h';
                    document.querySelector('#humid3').innerHTML = 'Humidity: ' + data.list[16].main.humidity + '%';

                    document.querySelector('#date4').innerHTML = data.list[24].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[3].weather[3].icon + '@2x.png';
                    document.querySelector('#temp4').innerHTML = 'Temp: ' + data.list[24].main.temp + '°F';
                    document.querySelector('#wind4').innerHTML = 'Wind: ' + data.list[24].wind.speed + ' m/h';
                    document.querySelector('#humid4').innerHTML = 'Humidity: ' + data.list[24].main.humidity + '%';

                    document.querySelector('#date5').innerHTML = data.list[32].dt_txt;
                    //iconn.src = 'https://openweathermap.org/img/wn/' + data.list[4].weather[4].icon + '@2x.png';
                    document.querySelector('#temp5').innerHTML = 'Temp: ' + data.list[32].main.temp + '°F';
                    document.querySelector('#wind5').innerHTML = 'Wind: ' + data.list[32].wind.speed + ' m/h';
                    document.querySelector('#humid5').innerHTML = 'Humidity: ' + data.list[32].main.humidity + '%';
    })
})
}
//button 
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    city = search.value;
    getWeatherData(city);
    saveHistory();
})
//call function to display
displayHistory()