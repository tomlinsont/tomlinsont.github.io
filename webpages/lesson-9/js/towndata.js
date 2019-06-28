var requestURL = 'towndata.json';

var myRequestObj = new XMLHttpRequest();

myRequestObj.open('GET', requestURL);
myRequestObj.send();

var myRequestData = JSON.parse(myRequestObj.responseText);    
console.log(requestURL);