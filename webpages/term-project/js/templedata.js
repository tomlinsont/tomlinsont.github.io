const templeRequestObj = new XMLHttpRequest();

var templeURLstring = '//tomlinsont.github.io/webpages/term-project/json/templelist.json';

templeRequestObj.open('GET', templeURLstring, true);

templeRequestObj.send();

templeRequestObj.onload = function() {
    let templeList = JSON.parse(templeRequestObj.responseText);
    console.log(templeList);
}