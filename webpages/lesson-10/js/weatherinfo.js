let weatherRequest = new XMLHttpRequest();

var apiURLstring = '//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=dd11f546924470c26cb3acba8d198320';

weatherRequest.open('GET', apiURLstring, true);

weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log (weatherData);

    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("hightemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("wind").innerHTML = weatherData.wind.speed;
    "<script src=\"windchill.js\"></script>";

    const description = weatherData.weather[0].description;
    document.getElementById("weatherdescription").innerHTML = description;

    const iconcode = weatherData.weather[0].icon;
    const icon_path = "//openweathermap.org/img/wn/" + iconcode + ".png";

    document.getElementById("weather_icon").src = icon_path;

    // Ave Temperature and Wind Speed
const tempF = ((weatherData.main.temp_max) + (weatherData.main.temp_min)) / 2;
const wind_Speed = weatherData.wind.speed;
console.log(temp_min);
}

// Ave Temperature and Wind Speed
/*const tempF = ((weatherData.main.temp_max) + (weatherData.main.temp_min)) / 2;
const wind_Speed = weatherData.main.wind.speed;
console.log(temp_min);*/
// Call windChill function to calculate wind chill
/*const chill = windChill(tempF, windSpeed);
	

	// Display wind chill in fahrenheit, includes character encoding for degrees
	document.getElementById("showWindChill").innerHTML = chill;*/

			
/*****************************************************
* Input: Temperature and windspeed parameters passed from function doInputOutput()
* Processing: Calculate the wind chill factor as a temperature measured in Fahrenheit
* Formula: f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
* Output: Return to doInputOutput() the wind chill factor in Fahrenheit 
*******************************************************/
function windChill(tempF, speed){
			
    // formula to calculate wind chill
	var f = (35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF *	Math.pow(speed, 0.16)));
				
	// Round f to 2 decimal places 
	var dp = 0;
	var multiplier = Math.pow(10, dp);
	f = Math.round(f * multiplier) / multiplier;
				
	// wind chill value to return to doInputOutput function to display to user
	return f;
}