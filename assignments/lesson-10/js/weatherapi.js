let weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', requestURL);

weatherRequest.send();

let weatherData;

weatherRequest.onload = function() {
    weatherData = JSON.parse(weatherRequest.responseText);
    console.log (weatherData);
}