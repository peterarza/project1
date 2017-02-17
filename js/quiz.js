function results()	{
	var correct = 0;
	var score = 0;
	var incorrect = 0;
	var wrong;

		var q1 = document.myQuiz.question1.value;
		var q2 = document.myQuiz.question2.value;
		var q3 = document.myQuiz.question3.value;
		var q4 = document.myQuiz.question4.value;
		var q5 = document.myQuiz.question5.value;
		var q6 = document.myQuiz.question6.value;
		var q7 = document.myQuiz.question7.value;
		var q8 = document.myQuiz.question8.value;
		var q9 = document.myQuiz.question9.value;
		var q10 = document.myQuiz.question10.value;


	if(q1 == "False") {
		correct++;
	}else {
		incorrect++;
	}

	if (q2 == "Server") {
		correct++;
	}else {
		incorrect++;
	}

	if (q3 == "True") {
		correct++;
	}else {
		incorrect++;
	}

	if (q4 == "PHP") {
		correct++;
	}else {
		incorrect++;
	}

	if (q5 == "False") {
		correct++;
	}else {
		incorrect++;
	}

	if (q6 == "Rasmus Lerdof") {
		correct++;
	}else {
		incorrect++;
	}

	if (q7 == "Document Object Model") {
		correct++;
	}else {
		incorrect++;
	}

	if (q8 == "Git") {
		correct++;
	}else {
		incorrect++;
	}

	if (q9 == "1") {
		correct++;
	}else {
		incorrect++;
	}

	if (q10 == "East") {
		correct++;
	}else {
		incorrect++;
	}


score = correct * 10;
wrong = incorrect;

	if (score >= 70)	{

	document.getElementById('myQuiz').innerHTML = ('<h2 class="pass">Grade: ' + score + '<br><br>You Passed!</h2>' + '<input type="button" id="resetQuiz" value="Restart Quiz" onclick="window.location.reload()">');
}else {
	document.getElementById('myQuiz').innerHTML = ('<h2 class="fail">Grade: ' + score + '<br><br>You Failed! ' + '<br>You got ' + wrong + ' questions wrong. </h2>' + '<input type="button" id="tryAgain" value="Try Again" onclick="window.location.reload()">');

	}


} // End of results()



	

























