const templeRequestObj = new XMLHttpRequest();

var templeURLstring = '//tomlinsont.github.io/webpages/term-project/json/templelist.json';
/*var templeURLstring = 'json/templelist.json';*/

templeRequestObj.open('GET', templeURLstring, true);

templeRequestObj.send();

templeRequestObj.onload = function() {
    let templeData = JSON.parse(templeRequestObj.responseText);
    console.log(templeData);
    
    let templeList = templeData.temples;
    console.log(templeList);
    
    let templeStr1 = templeList[0].name;
    console.log(templeStr1);
    console.log(templeList[0]);
    
    let templeStr2 = templeList[1].name;
    console.log(templeStr2);
     console.log(templeList[1]);
    
    let templeStr3 = templeList[2].name;
    console.log(templeStr3);
     console.log(templeList[2]);
    
    let templeStr4 = templeList[3].name;
    console.log(templeStr4);
    console.log(templeList[3]);
    
    for ( let i = 0; i < templeList.length; i++)
    {
        let templeName = [ "laie", "kona", "sandiego", "stgeorge"];
        
        let templeInfo = "<h3>" + templeList[i].name + "</h3>";
        templeInfo += "<p>" + "<strong>Address:</strong><br>" + templeList[i].address + "</p>";
        templeInfo += "<p>" + "<strong>Phone:</strong> " + templeList[i].telephone + "</p>";
        templeInfo += "<p>" + "<strong>Services:</strong><br> " + templeList[i].services + "</p>";
        templeInfo += "<p>" + "<strong>Ordinance Schedule:</strong><br> " + templeList[0].ordinance + "</p>";
        templeInfo += "<p>" + "<strong>Sessions:</strong><br> " + templeList[i].session + "</p>";
        templeInfo += "<p>" + "<strong>History:</strong><br> " + templeList[i].history + "</p>";
        templeInfo += "<p>" + "<strong>Summary:</strong><br> " + templeList[i].summary + "</p>";
        templeInfo += "<p>" + "<strong>Closure Schedule:</strong><br> " + templeList[i].closure+ "</p>";

        console.log(templeInfo);
        console.log(templeName[i]);

        document.getElementById(templeName[i]).innerHTML = templeInfo;
    }
}