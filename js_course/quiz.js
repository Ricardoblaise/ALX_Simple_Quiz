
function checkAnswer() {
  var correctAnswer = "4"; 
  
  var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
  if (userAnswer === correctAnswer) {
      alert("Correct answer! Well done.");
  } else {
      alert("Incorrect answer. Please try again.");
  }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);