//set up API key
var APIkey = "64190a1a0ee53ff0dca949db8fd51871";
var city;
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var search = document.querySelector(".form-control");
var searchBtn = document.querySelector("#button-addon2");
var weatherLocation = document.querySelector(".weather-location");
var weatherIcon = document.querySelector("#icon");
var tempt = document.querySelector("#temp");
var humid = document.querySelector("#humid");
var windy = document.querySelector("#wind");
var currentWeather = document.querySelector(".current-city");
var dateDisplay = dayjs().format("MM/DD/YY");
var previousSearch = [];

//function to save the history search
function saveHistory(searchInput) {
    previousSearch.push(searchInput)
    localStorage.setItem('previousSearch', JSON.stringify(previousSearch))
}
// //function to display history search
// function displayHistory (){
//     JSON.parse(localStorage.getItem('previousSearch', previousSearch));
//function for call api
function getWeatherData(city) {
    fetch(baseURL + city + '&units=imperial&appid=' + APIkey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data)
            weatherLocation.innerHTML = data.name;
            document.querySelector('#current-location').innerHTML = dateDisplay;
            weatherIcon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            tempt.innerHTML = 'Temp: ' + data.main.temp + "°F";
            humid.innerHTML = 'Humidity: ' + data.main.humidity + "%";
            windy.innerHTML = 'Wind: ' + data.wind.speed + "MPH";


            var lon = data.coord.lon;
            var lat = data.coord.lat;

            var fiveDaysURL = 'https://api.openweathermap.org/data/2.5/forecast?&lat='
            fetch(fiveDaysURL + lat + '&lon=' + lon + '&units=imperial&appid=' + APIkey)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                console.log(data)
                // console.log(data.list[0])
                //day 1
            document.querySelector("#date1").innerHTML = dayjs().add(1, "day").format("MM/DD/YY");
            console.log(data.list[0].weather[0].icon)
            document.querySelector("#status-1").src = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png';
            document.querySelector("#temp-1").innerHTML = "Temp: " + data.list[0].main.temp + "°F";
            document.querySelector("#humid-1").innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
            document.querySelector("#wind-1").innerHTML = "Wind: " + data.list[0].wind.speed + "MPH";
            
            //day 2 
            document.querySelector("#date2").innerHTML = dayjs().add(2, "day").format("MM/DD/YY");
            document.querySelector("#status-2").src = 'https://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png';
            document.querySelector("#temp-2").innerHTML = "Temp: " + data.list[7].main.temp + "°F";
            document.querySelector("#humid-2").innerHTML = "Humidity: " + data.list[7].main.humidity + "%";
            document.querySelector("#wind-2").innerHTML = "Wind: " + data.list[7].wind.speed + "MPH";
            //day 3
            document.querySelector("#date3").innerHTML = dayjs().add(3, "day").format("MM/DD/YY");
            document.querySelector("#status-3").src = 'https://openweathermap.org/img/wn/' + data.list[14].weather[0].icon + '@2x.png';
            document.querySelector("#temp-3").innerHTML = "Temp: " + data.list[14].main.temp + "°F";
            document.querySelector("#humid-3").innerHTML = "Humidity: " + data.list[14].main.humidity + "%";
            document.querySelector("#wind-3").innerHTML = "Wind: " + data.list[14].wind.speed + "MPH";
            //day 4
            document.querySelector("#date4").innerHTML = dayjs().add(4, "day").format("MM/DD/YY");
            document.querySelector("#status-4").src = 'https://openweathermap.org/img/wn/' + data.list[21].weather[0].icon + '@2x.png';
            document.querySelector("#temp-4").innerHTML = "Temp: " + data.list[21].main.temp + "°F";
            document.querySelector("#humid-4").innerHTML = "Humidity: " + data.list[21].main.humidity + "%";
            document.querySelector("#wind-4").innerHTML = "Wind: " + data.list[21].wind.speed + "MPH";

            //day 5
            document.querySelector("#date5").innerHTML = dayjs().add(5, "day").format("MM/DD/YY");
            document.querySelector("#status-5").src = 'https://openweathermap.org/img/wn/' + data.list[28].weather[0].icon + '@2x.png';
            document.querySelector("#temp-5").innerHTML = "Temp: " + data.list[28].main.temp + "°F";
            document.querySelector("#humid-5").innerHTML = "Humidity: " + data.list[28].main.humidity + "%";
            document.querySelector("#wind-5").innerHTML = "Wind: " + data.list[28].wind.speed + "MPH";
                })
        })
}
// getWeatherData("tacoma");
//button 
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    city = search.value;
    getWeatherData(city);
    saveHistory();
})
// //call function to display
// displayHistory()

