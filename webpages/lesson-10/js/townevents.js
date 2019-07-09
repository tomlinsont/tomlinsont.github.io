const eventsRequestObj = new XMLHttpRequest();

var apiURLstring = '//byui-cit230.github.io/weather/data/towndata.json';

eventsRequestObj.open('GET', apiURLstring, true);

eventsRequestObj.send();

eventsRequestObj.onload = function() {
    let townEvents = JSON.parse(eventsRequestObj.responseText);
    console.log(townEvents);

    let eventsList = townEvents.towns;
    document.getElementById("preston_events").innerHTML = eventsList[4].name;
    document.getElementById("fish_haven_events").innerHTML = eventsList[1].name;
    document.getElementById("soda_springs_events").innerHTML = eventsList[5].name;
    console.log(eventsList[4].name);
    console.log(eventsList[1].name);
    console.log(eventsList[5].name);
}