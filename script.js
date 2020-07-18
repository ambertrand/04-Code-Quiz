$(document).ready(function () {

    // Source https://www.w3schools.com/js/js_quiz.asp
    // Setting questions
    const quizQuestions = [
        {
            questionTitle: "How can you add a comment in a Javascript file",
            choices: ["//This is a comment", "<!--This is a comment-->", "'This is a comment", "$(This is a comment)"],
            correctAnswer: 0
        },
        {
            questionTitle: "Arrays in Javascript can be used to store _",
            choices: ["numbers and strings", "booleans", "other arrays", "All of the above"],
            correctAnswer: 3
        },
        {
            questionTitle: "What does DOM stand for?",
            choices: ["Developer Office Machine", "Document Object Model", "Database Object Module", "Database Output Model"],
            correctAnswer: 1
        },
        {
            questionTitle: "Inside which HTML element do we put the Javascript",
            choices: ["<js>", "<script>", "<form>", "<javascript>"],
            correctAnswer: 1
        },
        {
            questionTitle: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            correctAnswer: 2
        },
        {
            questionTitle: "How many columns are available in a page?",
            choices: ["15", "4", "8", "12"],
            correctAnswer: 3
        },
        {
            questionTitle: "What does API stand for?",
            choices: ["Assisted Python Integration", "Application Pre Interview", "Application Programming Interface", "Assisted Programming Interface"],
            correctAnswer: 2
        },
        {
            questionTitle: "What is the outer most section of the box model",
            choices: ["Padding", "Margin", "Content", "Border"],
            correctAnswer: 1
        }
    ];
// console.log(quizQuestions[2].questionTitle)

    // Setting variables
    const timerDisplay = document.querySelector("#timeLeft");
    let timer = 45;
    let score = 0;
    let timerLeft;
    let questionIndex = 0;


    // When start button clicked timer starts countdown and Quiz starts
    $("#startBtn").on("click", function () {
        // console.log("Button clicked");
        document.getElementById("startPage").style.display = "none";
        document.getElementById("startQuiz").style.display = "block";

        timerLeft = setInterval(function () {
            timer--;
            timerDisplay.innerText = timer + "sec";
            if (timer <= 0) {
                clearInterval(timerLeft);
                // quizEnd();
            }
        }, 1000)
        showQuestions();
    });

    //     //  Adds question from question array to appear on page and loops through all questions
    function showQuestions() {
        $("#questionName").text(quizQuestions[questionIndex].questionTitle);
        for (let i = 0; i <= quizQuestions[questionIndex].choices.length; i++) {
            $(".btn-" + i).text(quizQuestions[questionIndex].choices[i]);
        }
    // quizEnd();
    }

    // Checks the answer clicked with the correct answer and awards point if correct
    function ClickedAnswer() {
      if (quizQuestions[questionIndex].correctAnswer === $(this).data("index")) {
            score++;
            $("#questionAnswer").text("Correct!");     
        } else{
            $("#questionAnswer").text("Wrong");
            timer -= 10;   
        }
        // if (timer <= 0) {
        //     document.getElementById("startQuiz").style.display = "none";
        //     document.getElementById("finishedQuiz").style.display = "block";
        // } 
        // console.log(score);
        questionIndex++;
      showQuestions();
    }

    $(".answer-button").on("click", ClickedAnswer);

    // Quiz ends when timer is less or equal to 0 or quiz is finished.
    function quizEnd () {
    if (questionIndex >= quizQuestions.length  || (timer <= 0)) {
        document.getElementById("startQuiz").style.display = "none";
        document.getElementById("finishedQuiz").style.display = "block";
        }
        console.log(quizEnd + "All Done");
    }


});


//## User Story

// ```
// AS A coding bootcamp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score