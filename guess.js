var number = Math.floor(Math.random() * 98) + 2;
var turns = 6;
var low = document.getElementById("low");
var high = document.getElementById("high");
var note = document.getElementById("notify");
var sbutton = document.getElementById("sbutton");
var title = document.getElementById("title");
var table = document.getElementById("table");
var left = document.getElementById("try");
var tries = document.getElementById("tries");
var streak = document.getElementById("streak");
var wins = 0;

function submit() {
	let answer = document.getElementById("answer");
	if (answer.value < number) {
		note.innerHTML = "That number is too low!";
		if (answer.value > parseInt(low.innerHTML)) {
			low.innerHTML = Math.floor(answer.value);
		}
	} else if (answer.value > number) {
		note.innerHTML = "That number is too high!";
		if (answer.value < parseInt(high.innerHTML)) {
			high.innerHTML = Math.ceil(answer.value);
		}
	} else if (answer.value == number) {
		wins++;
		title.innerHTML = "You Guessed the Number!";
		notify.innerHTML = number;
		left.style.display = "none";
		answer.style.display = "none";
		table.style.display = "none";
		sbutton.innerHTML = "Replay?";
		sbutton.onclick = function(){replay()};
		streak.innerHTML = "";
		return;
	}
	
	turns--;
	
	if (turns == 0) {
		lose();
		return;
	}
	
	tries.innerHTML = turns;
}

function replay() {
	title.innerHTML = "Guess the Number! (between 1 and 100)";
	notify.innerHTML = "";
	left.style.display = "block";
	answer.style.display = "inline-block";
	answer.value = "";
	sbutton.innerHTML = "Submit";
	sbutton.onclick = function(){submit()};
	table.style.display = "inline-block";
	low.innerHTML = "1";
	high.innerHTML = "100";
	if (wins > 0) {
		streak.innerHTML = "Winning Streak: " + wins;
	} else {
		streak.innerHTML = "";
	}
	number = Math.floor(Math.random() * 98) + 2;
	turns = 6;
	tries.innerHTML = turns;
}

function lose() {
	title.innerHTML = "You Didn't Guess the Number...";
	notify.innerHTML = number;
	left.style.display = "none";
	answer.style.display = "none";
	table.style.display = "none";
	sbutton.innerHTML = "Retry?";
	sbutton.onclick = function(){replay()};
	if (wins > 0) {
		streak.innerHTML = "You Lost Your Winning Streak :(";
	}
	wins = 0;
}