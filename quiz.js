function checkAnswer() {
  var correctAnswer = "4"; 
  
  var userAnswer = document.querySelector('input[name="quiz"]:checked');
  
  if (!userAnswer) {
      document.getElementById('feedback').textContent = "Please select an answer.";
      return; 
  }

  userAnswer = userAnswer.value;

  if (userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct! Well done.";
  } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
  }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
