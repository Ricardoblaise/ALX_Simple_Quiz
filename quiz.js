
function checkAnswer() {
  var correctAnswer = "4"; 
  
  var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').textContent = "Correct answer! Well done.";
  } else {
      document.getElementById('feedback').textContent = "Incorrect answer. Please try again.";
  }
  } 

document.getElementById('submit-answer').addEventListener('click', checkAnswer);