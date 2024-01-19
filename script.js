const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (isNaN(score)) {
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

function generateNewQuestion() {
  const num1 = Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 10);
  const correctAns = num1 * num2;

  questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

  return correctAns;
}

let correctAns = generateNewQuestion();

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }

  // Generate a new question for the next round
  correctAns = generateNewQuestion();
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
  scoreEl.innerText = `Score: ${score}`;
}
