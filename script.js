// Constants
const quiz = document.querySelector("#quiz");
const questions = document.querySelector("#questions")
const button1 = document.querySelector("#buttona");
const button2 = document.querySelector("#buttonb");
const button3 = document.querySelector("#buttonc");
const button4 = document.querySelector("#buttond");
const timeEl = document.querySelector(".time");
const startButton = document.querySelector("#start");
const submitButton = document.querySelector("#enter")
const logInitials = document.querySelector("#logInitials");

const finalScore = document.querySelector(".time");


// Click on a button and quiz starts, timer starts and I am presented with a question
startButton.addEventListener("click", function () {
    setTime();
    document.querySelector("#main-jumbotron").style.display = "none";
    document.querySelector("#quiz-buttons").removeAttribute("style");
    nextQuestion();
})

let secondsLeft = 60;

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
        correctAnswer: 'Colombia'
    },
    {
        question: "Which OG Reggaetonero is referred to as 'El Abayarde'?",
        answers: {
            buttona: 'Bad Bunny',
            buttonb: 'Don Omar',
            buttonc: 'Daddy Yankee',
            buttond: 'Tego Calderon'
        },
        correctAnswer: 'Tego Calderon'
    },

    {
        question: "Which Reggaetonero is featured on Aventura's song 'Ella y Yo'?",
        answers: {
            buttona: 'Tito "El Bambino"',
            buttonb: 'Don Omar',
            buttonc: 'Alexis',
            buttond: 'Nicky Jam'
        },
        correctAnswer: 'Don Omar'
    },
    {
        question: "Which Reggaetonera sings on 'Quiero Bailar'?",
        answers: {
            buttona: 'Maluma',
            buttonb: 'Becky G',
            buttonc: 'Ivy Queen',
            buttond: 'Arcangel'
        },
        correctAnswer: 'Ivy Queen'
    },
    {
        question: "In what year was Daddy Yankees hit song 'Gasolina' released?",
        answers: {
            buttona: '2006',
            buttonb: '2003',
            buttonc: '1992',
            buttond: '2010'
        },
        correctAnswer: '2010'
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
    console.log(currentQuestion, index, currentQuestion.question);
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


    } else {
        secondsLeft -= 15;

    }
    index++;
    if (index === quizQuestions.length) {
        quizEnd();
    }
    else {
        nextQuestion();
    }
});

buttonb.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttonb.textContent === currentQuestion.correctAnswer) {

    } else {
        secondsLeft -= 15;
    }
    index++;
    if (index === quizQuestions.length) {
        quizEnd();
    }
    else {
        nextQuestion();
    }
});

buttonc.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttonc.textContent === currentQuestion.correctAnswer) {

    } else {
        secondsLeft -= 15;
    }
    index++;
    if (index === quizQuestions.length) {
        quizEnd();

    }
    else {
        nextQuestion();
    }
});

buttond.addEventListener("click", function (event) {
    event.preventDefault();
    if (buttond.textContent === currentQuestion.correctAnswer) {
    } else {
        secondsLeft -= 15;
    }
    index++;
    if (index === quizQuestions.length) {
        document.querySelector("#enter").removeAttribute("style");
        document.querySelector("#quiz-container").removeAttribute("style");
        console.log(secondsLeft);
        quizEnd();

    }
    else {
        nextQuestion();
    }

});

startButton.addEventListener("click", function () {
    setTime();

    nextQuestion();
})

let showResults = document.querySelector("#enter");

submitButton.addEventListener("click", function () {
    clearInterval(secondsLeft);
    document.querySelector("#enter").removeAttribute("style");
    document.querySelector("#quiz-container").removeAttribute("style");
    quizEnd();
})

function quizEnd() {
    clearInterval(setTime);
    document.querySelector("#results").removeAttribute("style");
    document.querySelector("#quiz-container").removeAttribute("style");
    finalScore.textContent = "time left: " + secondsLeft;
}

//function to save initials and score to local storage

function initialsSave() {
    const initials = document.querySelector("#logInitials");
    let initializer = intitials.value.trim();
    if (initializer !== "") {

        let highScores = JSON.parse(window.localStorage.getItem("high-scores") || "{}");

        let newScore = {
            score: secondsLeft,
            initials: initializer,

        }

        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));


    }


}

submitButton.onclick = initialsSave;


// startButton.addEventListener("click", function () {
//     setTime();
//     document.querySelector("#main-jumbotron").style.display = "none";
//     document.querySelector("#quiz-buttons").removeAttribute("style");
//     nextQuestion();
// })

// function initials()

// WHEN I answer a question incorrectly


// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score // 