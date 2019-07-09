const eventsRequestObj = new XMLHttpRequest();

var apiURLstring = '//byui-cit230.github.io/weather/data/towndata.json';

eventsRequestObj.open('GET', apiURLstring, true);

eventsRequestObj.send();

eventsRequestObj.onload = function() {
    let townEvents = JSON.parse(eventsRequestObj.responseText);
    console.log(townEvents);

    let eventsList = townEvents.towns;
    let activities = eventsList.events;
    console.log(activities);

    let eventString = "<h3>" + eventsList[4].name + "</h3><br />";
    for (var i = 0; i <= eventsList[4].events.listlength; i++) {
        eventString += "<p>" + eventsList[4].events[i] + "</p>";
    }
    console.log(eventString);
/*
    document.getElementById("preston_events").innerHTML = eventString;
    console.log(eventsList[4].name);
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