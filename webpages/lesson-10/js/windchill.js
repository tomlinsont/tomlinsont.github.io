/*****************************************************
* Input: Get temperature and windspeed from user.
* Processing: Call function windChill and store value returned from function windChill
* Output: Display to user the value returned from function windChill
*******************************************************/
function getWindChill() {
	// Input Temperature and Wind Speed
	var tempFH = parseFloat(document.getElementById("hightemp").innerHTML);
	var tempFL = parseFloat(document.getElementById("lowtemp").innerHTML);

	var windSpeed = parseFloat(document.getElementById("wind").innerHTML);

	// Ave temp between the high and low 
	var tempF = (tempFH + tempFL)/2;

	// Call windChill function to calculate wind chill
	var chill = windChill(tempF, windSpeed);

	// Display wind chill in fahrenheit, includes character encoding for degrees
	document.getElementById("showWindChill").innerHTML = chill;
}
			
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