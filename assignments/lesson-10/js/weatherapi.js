let weatherRequest = new XMLHttpRequest();

var apiURLstring = 'https://samples.openweathermap.org/data/2.5/forecast?id=5061036&units=imperial&appid=dd11f546924470c26cb3acba8d198320';

weatherRequest.open('GET', apiURLstring, true);

weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log (weatherData);
}