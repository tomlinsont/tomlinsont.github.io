var requestURL = 'https://github.com/tomlinsont/tomlinsont.github.io/blob/master/webpages/lesson-9/js/towndata.json';

var myRequestObj = new XMLHttpRequest();

myRequestObj.open('GET', requestURL);
myRequestObj.send();

var myRequestData = JSON.parse(myRequestObj.responseText);    
console.log(requestURL);