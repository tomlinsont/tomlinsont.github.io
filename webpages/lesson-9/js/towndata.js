var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var myRequestObj = new XMLHttpRequest();

myRequestObj.open('GET', requestURL);
myRequestObj.responseType = 'json';
myRequestObj.send();
let myRequestData;


myRequestData = JSON.parse(myRequestObj.responseText);    