
// Constants
const quiz = document.querySelector("#quiz");
const questions = document.querySelector("#questions")
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");
const startButton = document.querySelector("#start");
const logInitials = document.querySelector("#logInitials");

// Click on a button and quiz starts, timer starts and I am presented with a question
startButton.addEventListener("click", function () {
    setTime();
    document.querySelector("#main-jumbotron").style.display = "none";
    document.querySelector("#quiz-buttons").removeAttribute("style");
    nextQuestion();
})

let secondsLeft = 90;

function setTime(end) {

    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

console.log(secondsLeft);

function buildQuiz() {

    // add another if or if else statement to subtract time?

    // if (question)
}
// quizQUESTIONS

let quizQuestions = [

    {
        question: "What country is JBalvin from?",
        answers: {
            buttona: 'Colombia',
            buttonb: 'Panama',
            buttonc: 'Mexico',
            buttond: 'France'
        },
        correctAnswer: 'buttona'
    },
    {
        question: "Which OG Reggaetonero is referred to as 'El Abayarde'?",
        answers: {
            buttona: 'Bad Bunny',
            buttonb: 'Don Omar',
            buttonc: 'Daddy Yankee',
            buttond: 'Tego Calderon'
        },
        correctAnswer: 'buttond'
    },

    {
        question: "Which Reggaetonero is featured on Aventura's 'Ella y Yo'?",
        answers: {
            buttona: 'Tito "El Bambino"',
            buttonb: 'Don Omar',
            buttonc: 'Alexis',
            buttond: 'Nicky Jam'
        },
        correctAnswer: 'buttonb'
    },
    {
        question: "Which Reggaeton artist sings on 'Quiero Bailar'?",
        answers: {
            buttona: 'Maluma',
            buttonb: 'Becky G',
            buttonc: 'Ivy Queen',
            buttond: 'Arcangel'
        },
        correctAnswer: 'buttonc'
    },
    {
        question: "In what year was Daddy Yankees hit song 'Gasolina' released?",
        answers: {
            buttona: '2006',
            buttonb: '2003',
            buttonc: '1992',
            buttond: '2010'
        },
        correctAnswer: 'buttond'
    }
];

const renderQuizBtn = document.querySelector("#startbutton");
const buttona = document.querySelector("#buttona");
const buttonb = document.querySelector("#buttonb");
const buttonc = document.querySelector("#buttonc");
const buttond = document.querySelector("#buttond");

let index = 0;
let currentQuestion = quizQuestions[0];

let renderQuizEl = document.querySelector("#quizQuestions");

// nextQuestion();


// function to wrap around, to reuse lines of code

function nextQuestion() {
    currentQuestion = quizQuestions[index]
    console.log(currentQuestion.question);
    questions.textContent = currentQuestion.question;
    buttona.textContent = currentQuestion.answers.buttona;
    buttonb.textContent = currentQuestion.answers.buttonb;
    buttonc.textContent = currentQuestion.answers.buttonc;
    buttond.textContent = currentQuestion.answers.buttond;
}

// Event listeners for clicking answers 
buttona.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttona.textContent === currentQuestion.correctAnswer) {
        alert("Correct");
    } else {
        alert("Wrong");
    }
    index++;
    nextQuestion();
});

buttonb.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttonb.textContent === currentQuestion.correctAnswer) {
        alert("Correct");
    } else {
        alert("Wrong");
    }
    index++;
    nextQuestion();
});

buttonc.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttonc.textContent === currentQuestion.correctAnswer) {
        alert("Correct");
    } else {
        alert("Wrong");
    }
    index++;
    nextQuestion();
});

buttond.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttond.textContent === currentQuestion.correctAnswer) {
        alert("Correct");
    } else {
        alert("Wrong");
    }
    index++;
    nextQuestion();
});

// WHEN I answer a question incorrectly


// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score // 




