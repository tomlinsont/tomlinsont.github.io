const eventsRequestObj = new XMLHttpRequest();

var apiURLstring = '//byui-cit230.github.io/weather/data/towndata.json';

eventsRequestObj.open('GET', apiURLstring, true);

eventsRequestObj.send();

eventsRequestObj.onload = function() {
    let townEvents = JSON.parse(eventsRequestObj.responseText);
    console.log(townEvents);

    let townList = townEvents.towns;

    let activitiesList1 =  townEvents.towns[4].events;
    console.log(activitiesList1.length);
    let eventString = "<h3>" + townList[4].name + "</h3><br />";

    for (var i = 0; i < activitiesList1.length; i++) {
        eventString += "<p>" + townList[4].events[i] + "</p>";
    }
    console.log(eventString);
    document.getElementById("preston_events").innerHTML = eventString;

    let activitiesList2 =  townEvents.towns[1].events;
    console.log(activitiesList2.length);
    let eventString = "<h3>" + townList[1].name + "</h3><br />";

    for (var i = 0; i < activitiesList2.length; i++) {
        eventString += "<p>" + townList[1].events[i] + "</p>";
    }
    console.log(eventString);
    document.getElementById("fish_haven_events").innerHTML = eventString;


 /*   console.log(eventsList[4].name);
    console.log(eventsList[4].events);

    document.getElementById("fish_haven_events").innerHTML = eventsList[1].name;
    document.getElementById("fish_haven_events").innerHTML = eventsList[1].events;
    console.log(eventsList[1].name);
    console.log(eventsList[1].events);

    document.getElementById("soda_springs_events").innerHTML = eventsList[5].name;
    document.getElementById("soda_springs_events").innerHTML = eventsList[5].events;
    console.log(eventsList[5].name);
    console.log(eventsList[5].events);*/
}