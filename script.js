$(document).ready(function() {

// Setting variables
const timer = document.getElementById("timeLeft");
const viewHighScores = document.getElementById("highScores");
const questionTitle = document.getElementById("questionName");
const answer1 = document.getElementById("1")
const answer2 = document.getElementById("2")
const answer3 = document.getElementById("3")
const answer4 = document.getElementById("4")
const questionAnswer = document.getElementById("questionAnswer")

// Source https://www.w3schools.com/js/js_quiz.asp
// Setting questions
let quizQuestions = [
    {
        questionTitle: "How can you add a comment in a Javascript file",
        answer1: "//This is a comment",
        answer2: "<!--This is a comment-->",
        answer3: "'This is a comment",
        answer4: "$(This is a comment)",
        correctAnswer: "1"
    },
    {
        questionTitle: "Arrays in Javascript can be used to store _",
        answer1: "numbers and strings",
        answer2: "booleans",
        answer3: "other arrays",
        answer4: "All of the above",
        correctAnswer: "4"
    },
    {
        questionTitle: "What does DOM stand for?",
        answer1: "Developer Office Machine",
        answer2: "Document Object Model",
        answer3: "Database Object Module",
        answer4: "Database Output Model",
        correctAnswer: "2"
    },
    {
        questionTitle: "Inside which HTML element do we put the Javascript",
        answer1: "<js>",
        answer2: "<script>",
        answer3: "<form>",
        answer4: "<javascript>",
        correctAnswer: "2"
    },
    {
        questionTitle: "Commonly used data types DO NOT include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswer: "3"
    },
    {
        questionTitle: "How many columns are available in a page?",
        answer1: "15",
        answer2: "4",
        answer3: "8",
        answer4: "12",
        correctAnswer: "4"
    },
    {
        questionTitle: "What does API stand for?",
        answer1: "Assisted Python Integration",
        answer2: "Application Pre Interview",
        answer3: "Application Programming Interface",
        answer4: "Assisted Programming Interface",
        correctAnswer: "3"
    },
    {
        questionTitle: "How does a FOR loop start",
        answer1: "for(i = 0; i < 5; i++)",
        answer2: "for(i = 0; i < 5++)",
        answer3: "for (i <= 5; i+=)",
        answer4: "for ",
        correctAnswer: "3"
    },
]

$('startBtn').on("click", function() {
    console.log("Btn clicked");
})

});


//## User Story

// ```
// AS A coding bootcamp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score