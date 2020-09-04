// Generating Quiz fx

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // insert code here
    }

    function showResults(questions, quizContainer, resultsContainer) {
        // insert code here  
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}

// Timer 

let secondsLeft = 60;

function setTime() {


    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

}

setTime();


// QUESTIONS

let quizQuestions = [

    {
        question: "What country is JBalvin from?",
        answers: {
            button1: 'Colombia',
            button2: 'Panama',
            button3: 'Mexico',
            button4: 'France'
        },
        correctAnswer: 'button1'
    },
    {
        question: "Which OG Reggaetonero is referred to as 'El Abayarde'?",
        answers: {
            button1: 'Bad Bunny',
            button2: 'Don Omar',
            button3: 'Daddy Yankee',
            button4: 'Tego Calderon'
        },
        correctAnswer: 'button4'
    },

    {
        question: "Which Reggaetonero is featured on Aventura's 'Ella y Yo'?",
        answers: {
            button1: 'Tito "El Bambino"',
            button2: 'Don Omar',
            button3: 'Alexis',
            button4: 'Nicky Jam'
        },
        correctAnswer: 'button2'
    },
    {
        question: "Which Reggaeton artist sings on 'Quiero Bailar'?",
        answers: {
            button1: 'Maluma',
            button2: 'Becky G',
            button3: 'Ivy Queen',
            button4: 'Arcangel'
        },
        correctAnswer: 'button3'
    },
    {
        question: "In what year was Daddy Yankees hit song 'Gasolina' released?",
        answers: {
            button1: '2006',
            button2: '2003',
            button3: '1992',
            button4: '2010'
        },
        correctAnswer: 'button4'
    }
];

let index = 0;
let currentQuestion = quizQuestions[0];

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