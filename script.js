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
        showQuestions();
        timeClock();
    });


    //  Adds question from question array to appear on page and loops through all questions
    function showQuestions() {
        if ((questionIndex >= quizQuestions.length)) {
            return gameOver();
        } 
        $("#questionName").text(quizQuestions[questionIndex].questionTitle);
        for (let i = 0; i <= quizQuestions[questionIndex].choices.length; i++) {
            $(".btn-" + i).text(quizQuestions[questionIndex].choices[i]);
        }
    };

    // Starts the timer and decreases every second
    function timeClock() {
        timerLeft = setInterval(function () {
            timer--;
            timerDisplay.innerText = timer + " sec";
            if ((timer <= 0) || (questionIndex >= quizQuestions.length)) {
                clearInterval(timerLeft);
                // gameOver();
                timer = 0;
            }   
        }, 1000)
    };

    // Checks the answer clicked with the correct answer and awards point if correct, subtracts time if incorrect
    function ClickedAnswer() {
        if (quizQuestions[questionIndex].correctAnswer === $(this).data("index")) {
            score++;
            $("#questionAnswer").text("Correct!");   
        } else {
            $("#questionAnswer").text("Wrong");
            timer -= 10;
            // gameOver();
        }
        questionIndex++;
        showQuestions();
        gameOver();
        finalScore();
    }



    // Quiz ends when timer is less or equal to 0 or quiz is finished.
    function gameOver() {
        if ((questionIndex >= quizQuestions.length) || (timer <= 0)) {
            document.getElementById("startQuiz").style.display = "none";
            document.getElementById("finishedQuiz").style.display = "block";
            clearInterval(timerLeft);
            timer = 0;
        };
    };

    // Displays final score on All Done screen
    function finalScore() {
        $("span#finalScore").text("Your Final Score is " + score);
    }

    let scoreArray = [];

    // This stores score and initials in local storage
    function localScoreStorage() {
        scoreArray = JSON.parse(localStorage.getItem("scores"))
        const initials = $("#initialsInput").val();
        let userScore = {initials, score };
        if (!scoreArray) {
            scoreArray = [];
        }
        scoreArray.push(userScore);
        localStorage.setItem("scores", JSON.stringify(scoreArray));
        // console.log(scoreArray);
    }

    function retrieveScoresStorage() {
        let scoreArray = localStorage.getItem("scores");
        if (!scoreArray) {
            scoreArray = [];
        } else {
            scoreArray = JSON.parse(scoreArray)
        }
        // Sorts Highscores to be in order on High score page
        scoreArray.sort(function(a, b) {
            return b.score - a.score;
        });

    }

    
    

    $(".answer-button").on("click", ClickedAnswer);

    $("#initials").on("submit", function(event) {
        event.preventDefault();
        localScoreStorage();
        document.getElementById("finishedQuiz").style.display = "none";
        document.getElementById("hscores").style.display = "block";
    })

});




// ## Acceptance Criteria


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score