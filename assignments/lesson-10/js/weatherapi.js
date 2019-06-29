let weatherRequest = new XMLHttpRequest();

var apiURLstring = 'http://samples.openweathermap.org/data/2.5/forecast?id=5061036&units=imperial&appid=dd11f546924470c26cb3acba8d198320';

weatherRequest.open('GET', apiURLstring, true);

weatherRequest.send();

let weatherData;

weatherRequest.onload = function() {
    weatherData = JSON.parse(weatherRequest.responseText);
    console.log (weatherData);
}