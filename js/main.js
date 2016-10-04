var object = [
    {
    	question: "If 3 men can eat 3 steaks in 3 days, how many steaks can 6 men eat in 6 days ?",
    	answer: "12"
    },
    {
    	question: "It takes Ray 3 hours to clean the house. It takes Bill 2 hours to clean the house.How long would it take for them to clean it together?",
    	answer: "72"
    },
    {
    	question: "How many birthdays does the average Japanese woman have?",
    	answer: "1"
    },
    {
    	question: "Liam is younger than Mandy but older that Tara. Blake is older than Ruby who is older than Liam. Mandy is older tha Blake. Who is the second youngest?",
    	answer: "Liam"
    },
    {
    	question: "TRUE or FALSE: When you add 2 even numbers together, the answer will always be an even number?",
    	answer: "true"
    },
    {
    	question: "TRUE or FALSE: When you add 2 odd numbers together, the answer will always be odd?",
    	answer: "false"
    },
    {
    	question: "You put a coin in an empty bottle and insert a cork in the bottle's opening. Is it possible to remove the coin without taking out the cork or breaking the bottle?",
    	answer: "yes"
    },
]
for(i= 0; i < object.length; i++) {
	x = object[i].question
	document.getElementById('question' + [i]).textContent = x
}
function getInfo() {
	var correct = 0;
	var incorrect = 0;
	  for(i = 0; i < object.length; i++) {
	  	var answer = object[i].answer
        var guess = document.getElementById('answer' + [i]).value
        var questionSpot = document.getElementById('question' + [i])
        if(answer == guess) {
        	questionSpot.className = 'correct'
        	correct++

        } else {
        	questionSpot.className = 'incorrect'
        	incorrect++
        }
	  }
	  document.getElementById('correct').textContent = correct
	  document.getElementById('incorrect').textContent = incorrect
}












