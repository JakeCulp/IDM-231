var firstName;
var lastName;
var birthDayObj;
var WeekDays = ['Mon', 'Tue', 'Wed','Thu', 'Fri','Sat','Sun'];

document.getElementById("Capicorn").addEventListener("click", displayCap);
document.getElementById("Aquarius").addEventListener("click", displayAqu);
document.getElementById("Pisces").addEventListener("click", displayPis);
document.getElementById("Aries").addEventListener("click", displayAri);
document.getElementById("Taurus").addEventListener("click", displayTau);
document.getElementById("Gemini").addEventListener("click", displayGem);
document.getElementById("Cancer").addEventListener("click", displayCan);
document.getElementById("Leo").addEventListener("click", displayLeo);
document.getElementById("Virgo").addEventListener("click", displayVir);
document.getElementById("Libra").addEventListener("click", displayLib);
document.getElementById("Sagittarius").addEventListener("click", displaySag);
document.getElementById("Scorpio").addEventListener("click", displaySco);


function displayCap() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/dips.svg'>Dips</div><div id='displayMess'>You're exercise is Dips! They help with building up the chest and triceps muscles.</div>" ;
}

function displayAqu() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/bench.svg'>Bench</div><div id='displayMess'>You're exercise is the Bench Press! It's helps build up your chest and tricep muscles.</div>";
}

function displayPis() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/crunch.svg'>Crunch</div><div id='displayMess'>You're exercise are Crunches! They target your abdominals and core muscles and get you that 6 pack!</div>";
}

function displayAri() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/curls.svg'>Curls</div><div id='displayMess'>You're exercise are Curls! They help with developing the biceps and forearms.</div>";
}

function displayTau() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/deadlift.svg'>Deadlift</div><div id='displayMess'>You're exercise is the Deadlift! This full body exercise works primarily the lower back, hamstrings, glutes, and traps.</div>";
}

function displayGem() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/lunge.svg'>Lunge</div><div id='displayMess'>You're exercise are Lunges! They help develop the glutes, hamstrings, and quads. P.S. They feel like death!</div>";
}

function displayCan() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/ohp.svg'>Overhead Press</div><div id='displayMess'>You're exercise is the Overhead Press! This exercise focuses on developing the shoulders and delts.</div>";
}

function displayLeo() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/Pullup.svg'>Pullup</div><div id='displayMess'>You're exercise are Pullups! They help work the lats, biceps, upper back, and forearms.</div>";
}

function displayVir() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/Pushup.svg'>Pushup</div><div id='displayMess'>You're exercise are Pushups! They help strengthen the triceps and work the chest muscles.</div>";
}

function displayLib() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/row.svg'>Row</div><div id='displayMess'>You're exercise is the Bent Over Row! This exercise works the traps, lats, and upper back muscles.</div>";
}

function displaySag() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/skullcrusher.svg'>Skullcrusher</div><div id='displayMess'>You're exercise are Skullcrushers! They almost entirely target your triceps and help them grow tremendously!</div>";
}

function displaySco() {
  document.getElementById("displayMsg").innerHTML = "<div id='display'><img src='./Photos/squat.svg'>Squat</div><div id='displayMess'>You're exercise is Squats! They focus on developing the glutes, quads, and hamstrings.</div>";
}


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


	if((whichMonth == 1 && whichDayOfMonth <= 20) || (whichMonth == 12 && whichDayOfMonth >=22)) { displayCap();
	  } else if ((whichMonth == 1 && whichDayOfMonth >= 21) || (whichMonth == 2 && whichDayOfMonth <= 18)) { displayAqu();
  	} else if((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) { displayPis();
  	} else if((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 20)) { displayAri();
  	} else if((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 20)) { displayTau();
  	} else if((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 20)) { displayGem();
  	} else if((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) { displayCan();
  	} else if((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 23)) { displayLeo();
  	} else if((whichMonth == 8 && whichDayOfMonth >= 24) || (whichMonth == 9 && whichDayOfMonth <= 23)) { displayVir();
  	} else if((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 23)) { displayLib();
  	} else if((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 22)) { displaySco();
  	} else if((whichMonth == 11 && whichDayOfMonth >= 23) || (whichMonth == 12 && whichDayOfMonth <= 21)) { displaySag();
  	}

	return false;

}





