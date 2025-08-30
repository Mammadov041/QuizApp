const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

startButton.addEventListener("click", startGame);

let shuffledQuestions, currentQuestionIndex;

function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;

  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.textContent = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 2 + 2 ?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "What is 5 × 3 ?",
    answers: [
      { text: "15", correct: true },
      { text: "53", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which number is prime?",
    answers: [
      { text: "7", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What is 12 ÷ 4 ?",
    answers: [
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
    ],
  },
  {
    question: "What is 9 - 6 ?",
    answers: [
      { text: "3", correct: true },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which gas do plants produce during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "7", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "100°C", correct: true },
      { text: "0°C", correct: false },
    ],
  },
  {
    question: "Which is the smallest prime number?",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is 10² ?",
    answers: [
      { text: "100", correct: true },
      { text: "20", correct: false },
    ],
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Lion", correct: true },
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
      { text: "Cheetah", correct: false },
    ],
  },
  {
    question: "What is 50% of 200?",
    answers: [
      { text: "100", correct: true },
      { text: "50", correct: false },
    ],
  },
  {
    question: "Which programming language is used for web styling?",
    answers: [
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "HTML", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Beijing", correct: false },
    ],
  },
  {
    question: "Which gas do humans need to breathe?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "What is 8 × 8 ?",
    answers: [
      { text: "64", correct: true },
      { text: "88", correct: false },
      { text: "16", correct: false },
      { text: "80", correct: false },
    ],
  },
];
