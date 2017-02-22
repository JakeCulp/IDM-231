var firstName;
var lastName;
var birthDayObj;
var WeekDays = ['Mon', 'Tue', 'Wed','Thu', 'Fri','Sat','Sun'];

function calZodiac() {
	firstName = document.getElementById('fname').value;
	lastName = document.getElementById('lname').value;
	birthDayObj = new Date(document.getElementById('bDay').value);

	var whichMonth = birthDayObj.getMonth();
	var whichDayOfMonth = birthDayObj.getDate();

	whichMonth ++;
	whichDayOfMonth ++;

	var ageNow = Date.now() - birthDayObj.getTime();
  	var ageDate = new Date(ageNow);
  	var ageFinal = Math.abs(ageDate.getUTCFullYear() - 1970);


	if((whichMonth == 1 && whichDayOfMonth <= 20) || (whichMonth == 12 && whichDayOfMonth >=22)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Capicorn" + " and you are " + ageFinal + " years old.";
	} else if ((whichMonth == 1 && whichDayOfMonth >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Aquarius" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Pisces" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Aries" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Taurus" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Gemini" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Cancer" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Leo" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 8 && whichDayOfMonth >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Virgo" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Libra" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Scorpio" + " and you are " + ageFinal + " years old.";
  	} else if((whichMonth == 11 && whichDayOfMonth >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    document.getElementById("displayMsg").innerHTML = "Hey " + firstName + " " + lastName + " you are a " + "Sagittarius" + " and you are " + ageFinal + " years old.";
  	}





	return false;

}