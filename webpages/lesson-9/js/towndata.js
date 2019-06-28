var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var myRequestObj = new XMLHttpRequest();

myRequestObj.open('GET', requestURL);

myRequestObj.send();

let myRequestData;

onload = function() {
    myRequestData = JSON.parse(myRequestObj.responseText);    
    console.log(myRequestData);

    document.getElementById("frank").innerHTML = completeTownData(0);
  /*  document.getElementById("green").innerHTML = completeTownData(2);
    document.getElementById("spring").innerHTML = completeTownData(6);*/
}

function completeTownData(x) {
    console.log(myRequestData.towns[x]);

    let townInfo = "<h2>" + myRequestData.towns[x].name + "</h2>";
    townInfo += "<i>" + myRequestData.towns[x].motto + "</i>";
    townInfo += "<p>" + "Year Founded: " + myRequestData.towns[x].yearFounded + "</p>";
    townInfo += "<p>" + "Population: " + myRequestData.towns[x].currentPopulation + "</p>";
    townInfo += "<p>" + "Annual Rainfall: " + myRequestData.towns[x].averageRainfall + "</p>";

    return townInfo;
}