<script>
            var div = document.querySelector('div');
            var section = document.querySelector('section');
        
            var requestURL = 'file:///C:/Users/Tim/Documents/gitHub_files/tomlinsont.github.io/webpages/lesson-9/json/towndata.json';
            
            var request = newXMLHttpRequest();
            
            request.open('GET', requestURL);
            
            request.responseType = 'json';
            request.send();
            
            request.onload = function() {
                var towndata = request.response;
                populateDiv(towndata);
                showTowns(towndata);
            }
            
            function populateDiv (jsonObj) {
                var myTown1 = document.createElement('h2');
                myTown1.textContent = jsonObj['towns'][0]['name'];
                div.appendChild(myTown1);
                
                var myTown1data = document.createElement('p');
                myTown1data.textContent = jsonObj;
                div.appendChild(myTown1data);
            }
            
            function showTowns (jsonObj) {
                var towns = jsonObj['towns'];
                
                for (var i = 0; i < towns.length; i++) {
                    var myArticle = document.createElement('section');
                    var myH2 = document.createElement('h2');
                    var myPara1 = document.createElement('p');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    var myPara4 = document.createElement('p');
                    
                    myH2.textContent = towns[i].name;
                    myPara1.textContent = 'Motto: ' + towns[i].motto;
                    myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
                    myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
                    myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
                }
                
                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myPara4);
                
                section.appendChild(myArticle);
            }
        </script>