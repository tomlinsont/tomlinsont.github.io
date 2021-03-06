const eventsRequestObj = new XMLHttpRequest();

var apiURLstring = '//byui-cit230.github.io/weather/data/towndata.json';

eventsRequestObj.open('GET', apiURLstring, true);

eventsRequestObj.send();

eventsRequestObj.onload = function() {
    let townEvents = JSON.parse(eventsRequestObj.responseText);
    console.log(townEvents);

    let townList = townEvents.towns;

    // Events for Preston
    let activitiesList =  townEvents.towns[4].events;
    console.log(activitiesList.length);
    let eventString = "<h3>" + townList[4].name + "</h3><br />";

    for (var i = 0; i < activitiesList.length; i++) {
        eventString += "<p>" + townList[4].events[i] + "</p>";
    }
    console.log(eventString);
    document.getElementById("preston_events").innerHTML = eventString;

    // Events for Fish Haven
    activitiesList =  townEvents.towns[1].events;
    console.log(activitiesList.length);
    eventString = "<h3>" + townList[1].name + "</h3><br />";

    for (var i = 0; i < activitiesList.length; i++) {
        eventString += "<p>" + townList[1].events[i] + "</p>";
    }
    console.log(eventString);
    document.getElementById("fish_haven_events").innerHTML = eventString;

    // Events for Soda Springs
    activitiesList =  townEvents.towns[5].events;
    console.log(activitiesList.length);
    eventString = "<h3>" + townList[5].name + "</h3><br />";

    for (var i = 0; i < activitiesList.length; i++) {
        eventString += "<p>" + townList[5].events[i] + "</p>";
    }
    console.log(eventString);
    document.getElementById("soda_springs_events").innerHTML = eventString;
}