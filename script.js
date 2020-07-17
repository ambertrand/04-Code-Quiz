$(document).ready(function () {

    // Setting variables
    let timer = 45;
    let score = 0;
    const startBtn = document.querySelector("#startBtn");
    const timerDisplay = document.querySelector("#timeLeft")
    const quizQuest = document.querySelector("#questionName");
    const answer1 = document.getElementById('1');
    const answer2 = document.getElementById('2');
    const answer3 = document.getElementById('3');
    const answer4 = document.getElementById('4');
    let timerLeft;
    let questionIndex = 0;

    // Source https://www.w3schools.com/js/js_quiz.asp
    // Setting questions
    let quizQuestions = [
        {
            questionTitle: "How can you add a comment in a Javascript file",
            choice1: "//This is a comment",
            choice2: "<!--This is a comment-->",
            choice3: "'This is a comment",
            choice4: "$(This is a comment)",
            correctAnswer: "1"
        },
        {
            questionTitle: "Arrays in Javascript can be used to store _",
            choice1: "numbers and strings",
            choice2: "booleans",
            choice3: "other arrays",
            choice4: "All of the above",
            correctAnswer: "4"
        },
        {
            questionTitle: "What does DOM stand for?",
            choice1: "Developer Office Machine",
            choice2: "Document Object Model",
            choice3: "Database Object Module",
            choice4: "Database Output Model",
            correctAnswer: "2"
        },
        {
            questionTitle: "Inside which HTML element do we put the Javascript",
            choice1: "<js>",
            choice2: "<script>",
            choice3: "<form>",
            choice4: "<javascript>",
            correctAnswer: "2"
        },
        {
            questionTitle: "Commonly used data types DO NOT include:",
            choice1: "strings",
            choice2: "booleans",
            choice3: "alerts",
            choice4: "numbers",
            correctAnswer: "3"
        },
        {
            questionTitle: "How many columns are available in a page?",
            choice1: "15",
            choice2: "4",
            choice3: "8",
            choice4: "12",
            correctAnswer: "4"
        },
        {
            questionTitle: "What does API stand for?",
            choice1: "Assisted Python Integration",
            choice2: "Application Pre Interview",
            choice3: "Application Programming Interface",
            choice4: "Assisted Programming Interface",
            correctAnswer: "3"
        },
        {
            questionTitle: "How does a FOR loop start",
            choice1: "for(i = 0; i < 5; i++)",
            choice2: "for(i = 0; i < 5++)",
            choice3: "for (i <= 5; i+=)",
            choice4: "for ",
            correctAnswer: "3"
        },
    ]

    // When start button clicked timer starts countdown and Quiz starts
    $(startBtn).on("click", function () {
        // console.log("Button clicked");
        document.querySelector("#startPage").style.display = "none";
        document.querySelector("#startQuiz").style.display = "block";

        timerLeft = setInterval(function () {
            timer--;
            timerDisplay.innerText = timer + "sec";
            if (timer <= 0) {
                clearInterval(timerLeft);
                // finishedQuiz();
            }
        }, 1000)
        // startQuiz();
        showQuestions();
    })

    function showQuestions() {
       q = quizQuestions[questionIndex];
       quizQuest.textContent = q.questionTitle;
       answer1.textContent = q.choice1;
       answer2.textContent = q.choice2;
       answer3.textContent = q.choice3;
       answer4.textContent = q.choice4;
    }
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