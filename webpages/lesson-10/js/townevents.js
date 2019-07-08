const eventsRequestObj = new XMLHttpRequest();

var apiURLstring = '//byui-cit230.github.io/weather/data/towndata.json';

eventsRequestObj.open('GET', apiURLstring, true);

eventsRequestObj.send();

eventsRequestObj.onload = function() {
    let townEvents = JSON.parse(eventsRequestObj, this.responseText);

    console.log(townEvents);
}