// Array for the days of the week.
let dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const day = new Date();
console.log(day);

let newDay = day.getDay();
console.log(newDay);
console.log(dayNames[newDay]);
newDay = newDay + 1;

if (newDay === 7){
    newDay = 0;
}


let forcastRequest = new XMLHttpRequest();

var apiURLstring = '//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dd11f546924470c26cb3acba8d198320';

forcastRequest.open('GET', apiURLstring, true);

forcastRequest.send();

forcastRequest.onload = function() {
    let forcastData = JSON.parse(forcastRequest.responseText);
    console.log (forcastData);

    let forcastList = forcastData.list;
    console.log(forcastList.length);
    
    for (i = 0; i < forcastList.length; i++)
    {
        let forcastTime = forcastList[i].dt_txt;
        if (forcastTime.match(/18:00:00/gi))
        {           
            console.log(forcastTime);
            console.log(newDay);
            console.log(dayNames[newDay]);
            newDay += 1;

            console.log(nextDay);
            document.getElementById("day" + newDay) = 
            "New Day";

        }
        
           
    }
}