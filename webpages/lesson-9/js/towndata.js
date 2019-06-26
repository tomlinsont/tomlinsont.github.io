/*const myRequestObj = newXMLHttpRequest();

const myRequestURL = "../json/towndata.json";

let myweatherInfo;    
myRequestObj.open('GET', requestURL);
myRequestObj.send();
myRequestObject.onload = function() {
    myWeatherInfo = JSON.parse(myRequestObject.responseText);
    console.log(myWeatherInfo);
	
	//make a call to the function below for each town and send the array number of the needed town. Ppon returning insert it as html inside the id for each city
	document.getElementById("spring").innerHTML = assembleData(6);
	document.getElementById("soda").innerHTML = assembleData(5);
	document.getElementById("place").innerHTML = assembleData(3);
}

function assembleData(x) {
	//make sure the town data is being loaded for the variale x
	console.log(myWeatherInfo.towns[x]);
	
	//Build the html as a javascript variable and include the html tags
	let townInfo = "<h2>"+myWeatherInfo.towns[x].name+"</h2>";
	townInfo += "<i>"+myWeatherInfo.towns[x].motto+"</i>";
	townInfo += "<p>Year founded: "+myWeatherInfo.towns[x].yearFounded+"</p>";
	townInfo += "<p>Current Population: "+myWeatherInfo.towns[x].currentPopulation+"</p>";
	townInfo += "<p>Rainfall: "+myWeatherInfo.towns[x].averageRainfall+"</p>";
         
	//return the variable that now has all the town information
	return townInfo;
}*/

//let townNames = jsonObj["towns"][1],["towns"][4],["towns"][5];
//console.log(townNames);
            
            const myRequestObj = new XMLHttpRequest();
            alert("hi");
            const requestURL = "https://github.com/tomlinsont/tomlinsont.github.io/blob/master/webpages/lesson-9/json/towndata.json";
            
            myRequestObj.open('GET', requestURL);
            
         /*   request.responseType = 'json';*/
            myRequestObj.send();
            
            myRequestObj.onload = function() {
                var towndata = JSON.parse(myRequestObj.responseText);
              //  populateDiv(towndata);
                console.log(towndata);
                
                document.getElementById("frank").innerHTML = showTowns(5);
                document.getElementById("green").innerHTML = showTowns(2);
                document.getElementById("spring").innerHTML = showTowns(6);
            }
            
       /*     function populateDiv (jsonObj) {
                var myTown1 = document.createElement('h2');
                myTown1.textContent = jsonObj['towns'][0]['name'];
                div.appendChild(myTown1);
                
                var myTown1data = document.createElement('p');
                myTown1data.textContent = jsonObj;
                div.appendChild(myTown1data);
            }*/
            
            function showTowns (x) {
               // var towns = jsonObj['towns'];
                console.log(towndata.towns[x]);
               
                //for (var i = 0; i < towns.length; i++) {
                  //  var myArticle = document.createElement('section');
                /*    var myH2 = document.createElement('h2');
                    var myPara1 = document.createElement('p');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    var myPara4 = document.createElement('p');
                    
                    myH2.textContent = towns[x].name;
                    myPara1.textContent = 'Motto: ' + towns[x].motto;
                    myPara2.textContent = 'Year Founded: ' + towns[x].yearFounded;
                    myPara3.textContent = 'Population: ' + towns[x].currentPopulation;
                    myPara4.textContent = 'Average Rainfall: ' + towns[x].averageRainfall;*/
                    var townInfo = "<h2>" + towndata.towns[x].name + "</h2>";
                    
                    return townInfo;
                }
                
            /*    myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);
                
                section.appendChild(myArticle);*/
            
        