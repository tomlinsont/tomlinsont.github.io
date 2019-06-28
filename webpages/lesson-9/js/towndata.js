/*var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var myRequestObj = new XMLHttpRequest();

myRequestObj.open('GET', requestURL);
myRequestObj.responseType = '';
myRequestObj.send();*/
import { onload, responseText } from "./json/towndata.json";

let myRequestData;

onload = function() {
    myRequestData = JSON.parse(responseText);    
    console.log(myRequestData);

    document.getElementById("frank").innerHTML = completeTownData(0);
}

function completeTownData(x) {
    console.log(myRequestData.towns[x]);

    let townInfo = "<h2>" + myRequestData.towns[x].name + "</h2>";

    return townInfo;
}