//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 16;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Какая главная цель модельной школы?",
    options: ["Обучение танцам", "Развитие модельных навыков", "Изучение иностранных языков", "Проведение спортивных мероприятий"],
    correct: "Развитие модельных навыков",
  },
  {
    id: "1",
    question: "Что помогает детям развивать модельная школа?",
    options: ["Творческий потенциал", "Математические навыки", "Литературное чтение", "Музыкальные таланты"],
    correct: "Творческий потенциал",
  },
  {
    id: "2",
    question: "Какие мероприятия проводятся в модельной школе?",
    options: ["Выступления и показы мод", "Спортивные соревнования", "Химические эксперименты", "Театральные постановки"],
    correct: "Выступления и показы мод",
  },
  {
    id: "3",
    question: "Какие навыки развиваются у детей в модельной школе?",
    options: ["Уверенность в себе", "Кулинарные навыки", "Планирование бюджета", "Техническое обслуживание автомобилей"],
    correct: "Уверенность в себе",
  },
  {
    id: "4",
    question: "Какие возможности открываются для детей в модельной школе?",
    options: ["Участие в фотосессиях и рекламных проектах", "Путешествия в космос", "Изучение иностранных языков", "Программирование"],
    correct: "Участие в фотосессиях и рекламных проектах",
  },
  {
    id: "5",
    question: "Какие основные принципы обучения в модельной школе?",
    options: ["Индивидуальный подход к каждому ребенку", "Принцип единого экзамена для всех учеников", "Система жесткого контроля и наказаний", "Самообучение без участия преподавателей"],
    correct: "Индивидуальный подход к каждому ребенку",
  },
  {
    id: "6",
    question: "Какие предметы изучаются в модельной школе?",
    options: ["Моделирование и стилистика", "Математика и физика", "История и география", "Пение и танцы"],
    correct: "Моделирование и стилистика",
  },
  {
    id: "7",
    question: "Какие возрастные категории могут посещать детскую модельную школу?",
    options: ["От 5 до 16 лет", "От 18 до 30 лет","От 30 до 50 лет", "Без ограничений по возрасту"],
    correct: "От 5 до 16 лет",
  },
  {
    id: "8",
    question: "Какие навыки помогут ученикам модельной школы в будущей карьере?",
    options: ["Умение выступать перед публикой", "Поварское искусство", "Конструирование ракет", "Бокс и единоборства"],
    correct: "Умение выступать перед публикой",
  },
  {
    id: "9",
    question: "Какие достижения могут получить ученики модельной школы?",
    options: ["Участие в модных показах и рекламных кампаниях", "Получение Нобелевской премии", "Завоевание олимпийских медалей", "Строительство космического корабля"],
    correct: "Участие в модных показах и рекламных кампаниях",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == (quizArray.length/2)) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      if (scoreCount == questionCount){
        userScore.innerHTML =
          "Отлично! Твой результат " + scoreCount + " из " + questionCount + ".<br>" + "До исполнения мечты остался один шаг!";
      }
      else{
        userScore.innerHTML =
          "Твой результат " + scoreCount + " из " + questionCount + ".<br>" + "Мы поможем стать лучше!!!";
      }

    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " из " + (quizArray.length/2) + " вопросов";
      //display quiz
      quizDisplay(questionCount);
      count = 16;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}с`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1500);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " из " + (quizArray.length/2) + " вопросов";
    //question
    let question_DIV = document.createElement("h4");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 16;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
