// Array for the days of the week.
var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const day = new Date();
console.log(day);

const newDay = day.getDay();
console.log(newDay);
console.log(dayNames[newDay]);



let forcastRequest = new XMLHttpRequest();

var apiURLstring = '//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dd11f546924470c26cb3acba8d198320';

forcastRequest.open('GET', apiURLstring, true);

forcastRequest.send();

forcastRequest.onload = function() {
    let forcastData = JSON.parse(forcastRequest.responseText);
    console.log (forcastData);

    let forcastList = forcastData.list;
    console.log(forcastList.length);

    console.log(forcastList[0].dt_txt);
   /* for (i = 0; i < forcastList.length; i++)
    {
        let forcastTime = forcastList[i].dt_txt;
        console.log(forcastTime);

       
    }*/
}