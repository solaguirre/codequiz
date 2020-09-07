
// Constants
const quiz = document.querySelector("#quiz");
const questions = document.querySelector("#questions")
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const timeEl = document.querySelector(".time");
const buttons = document.querySelector("#buttons");
const logInitials = document.querySelector("#logInitials");

// Click start button and jumbotron is hidden and replaced with quiz questions...

// Click on a button and quiz starts, timer starts and I am presented with a question

// Generating Quiz fx
function buildQuiz() {

}

function showResults
// Timer 

let secondsLeft = 90;

function setTime(end) {

    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    // add another if or if else statement to subtract time?

    // if (question)
};

setTime();
console.log(secondsLeft);


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

const renderQuizBtn = document.querySelector("#beginQuiz");
const buttona = document.querySelector("a");
const buttonb = document.querySelector("b");
const buttonc = document.querySelector("c");
const buttond = document.querySelector("d");

let index = 0;
let currentQuestion = quizQuestions[0];

let renderQuizEl = document.querySelector("#quizQuestions");

function renderQuizQuestion() {
    renderQuizEl.innerHTML =


        nextQuestion();


    // function to wrap around, to reuse lines of code

    function nextQuestion() {
        currentQuestion = quizQuestions[index]
        question.textContent = currentQuestion.question;
        button1.textContent = currentQuestion.answers[0];
        button2.textContent = currentQuestion.answers[1];
        button3.textContent = currentQuestion.answers[2];
        button4.textContent = currentQuestion.answers[3];
    }

    // Event listeners for clicking answers 
    button1.addEventListener("click", function (event) {
        event.preventDefault();
        if (button1.textContent === currentQuestion.correctAnswer) {
            alert("Correct");
        } else {
            alert("wrong");
        }
        index++;
        nextQuestion();
    });

    button2.addEventListener("click", function (event) {
        event.preventDefault();
        if (button2.textContent === currentQuestion.correctAnswer) {
            alert("Correct");
        } else {
            alert("wrong");
        }
        index++;
        nextQuestion();
    });

    button3.addEventListener("click", function (event) {
        event.preventDefault();
        if (button3.textContent === currentQuestion.correctAnswer) {
            alert("Correct");
        } else {
            alert("wrong");
        }
        index++;
        nextQuestion();
    });

    button4.addEventListener("click", function (event) {
        event.preventDefault();
        if (button4.textContent === currentQuestion.correctAnswer) {
            alert("Correct");
        } else {
            alert("wrong");
        }
        index++;
        nextQuestion();
    });
}
// WHEN I answer a question incorrectly


// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score // 




