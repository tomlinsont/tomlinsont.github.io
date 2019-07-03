let forcastRequest = new XMLHttpRequest();

var apiURLstring = '//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b6907d289e10d714a6e88b30761fae22';

forcastRequest.open('GET', apiURLstring, true);

forcastRequest.send();

forcastRequest.onload = function() {
    let forcastData = JSON.parse(forcastRequest.responseText);
    console.log (forcastData);

   
}