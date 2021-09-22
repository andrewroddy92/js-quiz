var homepage = document.getElementById('homepage');
var question1 = document.getElementById('question-1');
var question2 = document.getElementById('question-2');
var question3 = document.getElementById('question-3');
var question4 = document.getElementById('question-4');
var question5 = document.getElementById('question-5');
var result = document.getElementById('result');
var finalScore = document.getElementById('final-score');
var highscores = document.getElementById('highscores');
var startButton = document.getElementById('startbutton');
var time = document.getElementById('timeLeft')
var timeLeft = 60;
var questions = {}

startButton.addEventListener('click', startQuiz)

function endQuiz() {
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    finalScore.style.display = 'block';
}

function timerstart() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      time.textContent = "Time " + timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
        console.log('please work')
    }, 1000);
  }

function startQuiz() {
    homepage.style.display = 'none';
    question1.style.display = 'block';
    timerstart()
}