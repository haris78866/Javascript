const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is 5 * 3?", answer: "15" },
  { question: "What is 10 / 2?", answer: "5" },
  { question: "What is 7 - 4?", answer: "3" },
  { question: "What is 8 + 6?", answer: "14" },
  { question: "What is 20 / 4?", answer: "5" },
  { question: "What is 9 * 2?", answer: "18" },
  { question: "What is 12 - 7?", answer: "5" },
  { question: "What is 15 + 3?", answer: "18" },
  { question: "What is 25 / 5?", answer: "5" }
];

let currentQuestion = 0;
let score = 0;
let timer;

const startButton = document.getElementById("start");
const submitButton = document.getElementById("submit");
const questionText = document.getElementById("question");
const answerInput = document.getElementById("answer");
const timerDisplay = document.getElementById("timer");

function startQuiz() {
  startButton.style.display = "none";
  showQuestion();
  startTimer();
}

function showQuestion() {
  questionText.textContent = questions[currentQuestion].question;
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  const correctAnswer = questions[currentQuestion].answer;
  
  if (userAnswer === correctAnswer) {
    score++;
  }
  
  answerInput.value = "";
  
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  let time = 120;
  timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    timerDisplay.textContent = `${minutes}:${seconds}`;
    
    if (time <= 0) {
      clearInterval(timer);
      endQuiz();
    } else {
      time--;
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  questionText.textContent = `Quiz Complete! Your score is ${score}/${questions.length}.`;
  timerDisplay.textContent = "0:00";
}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", checkAnswer);

