    // Array - for each day of the month. 
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    // Array for the days of the week.
   /* var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];*/

    // Create a date object
	var newDate = new Date();
			
    // var formattedDate is string.  assigned the concatenated elements //below

	var formattedDate = dayNames[newDate.getDay()] + ',' +' ' + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear();
			
	document.getElementById("outputdiv").innerHTML = formattedDate;
