// Array for the days of the week.
var weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const day = new Date();
console.log(day);

let newDay = day.getDay();
console.log(newDay);
console.log(weekDays[newDay]);
newDay = newDay + 1;

if (newDay === 7){
    newDay = 0;
}
 let city = myRequestData.towns[x].name;
console.log(city);

let forcastRequest = new XMLHttpRequest();

var apiURLstring = '//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=dd11f546924470c26cb3acba8d198320';

forcastRequest.open('GET', apiURLstring, true);

forcastRequest.send();

forcastRequest.onload = function() {
    let forcastData = JSON.parse(forcastRequest.responseText);
    console.log (forcastData);

    let forcastList = forcastData.list;
    console.log(forcastList.length);
    let x = 1;
    
    for (i = 0; i < forcastList.length; i++)
    {
        let forcastTime = forcastList[i].dt_txt;
        if (forcastTime.match(/18:00:00/gi))
        {           
            console.log(forcastTime);
            console.log(newDay);
            console.log(dayNames[newDay]);
            console.log(forcastList[i].weather[0].description);
            console.log(forcastList[i].main.temp);
                        
            document.getElementById("day" + x).innerHTML = weekDays[newDay]; 
            
            document.getElementById("day" + x + "conditions").innerHTML = forcastList[i].weather[0].description;
           
            const iconcode = forcastList[i].weather[0].icon;
            const icon_path = "//openweathermap.org/img/wn/" + iconcode + ".png";
            document.getElementById("day" + x + "icon").src = icon_path;
            console.log(iconcode);
            document.getElementById("day" + x + "temp").innerHTML = forcastList[i].main.temp + "&deg;F";
            
            x += 1;
            
            if (x === 7) {
                x = 0;
            }  
            
            newDay += 1;
            
            if (newDay === 7) {
                newDay = 0;
            }
        }
        
           
    }
}

function showForcast() {

}