const questions = [{
    question: "¿Cuál de los siguientes no es un tipo primitivo en JavaScript?",
    answers: ["Number", "String", "Object", "Boolean"],
    correctAnswer: "Object"
},
{
    question: "¿Cuál es la forma correcta de comentar una sola línea en JavaScript?",
    answers: ["/* Esto es un comentario */", "# Esto es un comentario", "// Esto es un comentario", "' Esto es un comentario"],
    correctAnswer: "// Esto es un comentario"
},
{
    question: "¿Cuál es el operador de igualdad estricta en JavaScript?",
    answers: ["=", "==", "===", "!=="],
    correctAnswer: "==="
},
{
    question: "¿Cuál es la función en JavaScript que se utiliza para mostrar un cuadro de diálogo con un mensaje?",
    answers: ["console.log()", "alert()", "prompt()", "confirm()"],
    correctAnswer: "alert()"
},
{
    question: "¿Qué método se utiliza para eliminar el último elemento de un array en JavaScript?",
    answers: ["pop()", "shift()", "remove()", "splice()"],
    correctAnswer: "pop()"
}
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll("#option");
const nextButton = document.getElementById("next");

function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0; 
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = question.answers[i];
    }
}

function checkAnswer(button) {
    const selectedAnswer = button.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        incrementarContador();
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
   
        questionElement.textContent = `¡Quiz completado! ¡Has acertado ${correctAnswers} / ${questions.length} preguntas!`;
        optionButtons.forEach((button) => (button.style.display = "none"));
        nextButton.style.display = "none";
    }
}

function incrementarContador() {
    correctAnswers++;
}

startQuiz();

