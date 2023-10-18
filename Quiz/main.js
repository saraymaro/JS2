// Definir las preguntas y respuestas
const questions = [
    {
        question: "¿Cuál de los siguientes no es un tipo primitivo en JavaScript?",
        answers: ["Number", "String", "Object", "Boolean"],
        correctAnswer: "Object"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Tierra", "Marte", "Júpiter", "Venus"],
        correctAnswer: "Júpiter"
    },
    {
        question: "¿Quién pintó La Última Cena?",
        answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        answers: ["1776", "1865", "1492", "1984"],
        correctAnswer: "1776"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Río Amazonas", "Río Nilo", "Río Misisipi", "Río Danubio"],
        correctAnswer: "Río Amazonas"
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll("#option");
const nextButton = document.getElementById("next");

function startQuiz() {
    currentQuestionIndex = 0;
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
        // Respuesta correcta
        // Puedes agregar aquí una lógica para puntuación o retroalimentación
    } else {
        // Respuesta incorrecta
        // Puedes agregar aquí una lógica para retroalimentación
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Has completado el quiz, puedes mostrar un mensaje de finalización
        questionElement.textContent = "¡Quiz completado!";
        optionButtons.forEach((button) => (button.style.display = "none"));
        nextButton.style.display = "none";
    }
}

startQuiz();
