var homepage = document.getElementById('homepage');
var question1 = document.getElementById('question-1');
var question2 = document.getElementById('question-2');
var question3 = document.getElementById('question-3');
var question4 = document.getElementById('question-4');
var question5 = document.getElementById('question-5');
var correctAnswers = document.getElementsByClassName('correct');
var incorrectAnswers = document.getElementsByClassName('incorrect');
var result = document.getElementById('result');
var finalScore = document.getElementById('final-score');
var score = document.getElementById('score');
var submitScore = document.getElementById('submitscore');
var highscores = document.getElementById('highscores');
var viewHighScores = document.getElementById('viewhighscores');
var startButton = document.getElementById('startbutton');
var time = document.getElementById('timeLeft');
var display = document.getElementById('display');
var goBack = document.getElementById('goback');
var clear = document.getElementById('clear');
var timeLeft = 60;
var timerInterval;
var scoreBoard = [];
startButton.addEventListener('click', startQuiz);
submitScore.addEventListener('click', saveScore);
viewHighScores.addEventListener('click', viewHighscores);
goBack.addEventListener('click', goHome);
clear.addEventListener('click', clearScores);


function viewHighscores() {
  if (localStorage.getItem('scoreBoard') !== null) {
    scoreBoard = localStorage.getItem('scoreBoard').split(',');
  } else {
    scoreBoard = []
  }
  clearInterval(timerInterval);
  timeLeft = 0;
    homepage.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    result.style.display = 'none';
    finalScore.style.display = 'none';
    clearScoresList()
    scoreBoard.forEach(function (item) {
      let li = document.createElement('li');
      display.appendChild(li);
      li.innerHTML += item;
  });
    highscores.style.display = 'block';
}

function clearScores() {
  localStorage.clear();
  clearScoresList()
  viewHighscores()
}

function clearScoresList() {
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

function goHome() {
  highscores.style.display = 'none';
  homepage.style.display = 'block';
}

function endQuiz() {
    clearInterval(timerInterval);
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    result.style.display = 'none';
    score.textContent = 'Your final score is: ' + timeLeft;
    finalScore.style.display = 'block';
}

function timerstart() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      timeLeft--;
      time.textContent = "Time: " + timeLeft;
  
      if(timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

function startQuiz() {
  timeLeft = 60
    timerstart()
    homepage.style.display = 'none';
    question1.style.display = 'block';

    correctAnswers.item(0).addEventListener('click', handleCorrectAnswer1);
    correctAnswers.item(1).addEventListener('click', handleCorrectAnswer2);
    correctAnswers.item(2).addEventListener('click', handleCorrectAnswer3);
    correctAnswers.item(3).addEventListener('click', handleCorrectAnswer4);
    correctAnswers.item(4).addEventListener('click', endQuiz);

    //Question 1
    incorrectAnswers.item(0).addEventListener('click', handleIncorrectAnswer1);
    incorrectAnswers.item(1).addEventListener('click', handleIncorrectAnswer1);
    incorrectAnswers.item(2).addEventListener('click', handleIncorrectAnswer1);

    //Question 2
    incorrectAnswers.item(3).addEventListener('click', handleIncorrectAnswer2);
    incorrectAnswers.item(4).addEventListener('click', handleIncorrectAnswer2);
    incorrectAnswers.item(5).addEventListener('click', handleIncorrectAnswer2);

    //Question 3
    incorrectAnswers.item(6).addEventListener('click', handleIncorrectAnswer3);
    incorrectAnswers.item(7).addEventListener('click', handleIncorrectAnswer3);
    incorrectAnswers.item(8).addEventListener('click', handleIncorrectAnswer3);

    //Question 4
    incorrectAnswers.item(9).addEventListener('click', handleIncorrectAnswer4);
    incorrectAnswers.item(10).addEventListener('click', handleIncorrectAnswer4);
    incorrectAnswers.item(11).addEventListener('click', handleIncorrectAnswer4);

    //Question 5
    incorrectAnswers.item(12).addEventListener('click', endQuiz);
    incorrectAnswers.item(13).addEventListener('click', endQuiz);
    incorrectAnswers.item(14).addEventListener('click', endQuiz);
}

function handleCorrectAnswer1(){
  handleCorrectAnswer(question1, question2)
}

function handleCorrectAnswer2(){
  handleCorrectAnswer(question2, question3)
}

function handleCorrectAnswer3(){
  handleCorrectAnswer(question3, question4)
}

function handleCorrectAnswer4(){
  handleCorrectAnswer(question4, question5)
}

function handleIncorrectAnswer1(){
  handleIncorrectAnswer(question1, question2)
}

function handleIncorrectAnswer2(){
  handleIncorrectAnswer(question2, question3)
}

function handleIncorrectAnswer3(){
  handleIncorrectAnswer(question3, question4)
}

function handleIncorrectAnswer4(){
  handleIncorrectAnswer(question4, question5)
}

function handleCorrectAnswer(currentQuestion, nextQuestion) {
  result.style.display = 'block';
  result.textContent = 'Correct!';
  currentQuestion.style.display = 'none';
  nextQuestion.style.display = 'block';
}

function handleIncorrectAnswer(currentQuestion, nextQuestion) {
  timeLeft = timeLeft - 10;
  result.textContent = 'Wrong?';
  result.style.display = 'block';
  currentQuestion.style.display = 'none';
  nextQuestion.style.display = 'block';
}

function saveScore() {
  var initials = document.getElementById('initials').value;
  var userscore = initials + ' ' + timeLeft;
  if (localStorage.getItem('scoreBoard') !== null) {
    scoreBoard = localStorage.getItem('scoreBoard').split(',');
  } else {
    scoreBoard = []
  }
  scoreBoard.push(userscore);
  localStorage.setItem('scoreBoard', scoreBoard)
  viewHighscores()
}

