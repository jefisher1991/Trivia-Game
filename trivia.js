// function- begin the trivia game- questions are not visible until this button is pushed. 

// timer starts- users will have a certain number of seconds to complete the questions, the timer starts when the user clicks on the start triva game

// timer will stop when users hit the "submit answers" button

// score of correct answers will appear as an alert when user clicks the "submit answers" button OR the timer runs out
var counter = 10;
var interval;
$(document).ready(function() {

    game(); //clean

});

// Starts game


function game() {
    $("#startButton").click(function() {
        displayGame();
        startTimer();

    });

    $("#stopButton").click(function() {
        displayResults();
        stopTimer();
    });
}

// display all the questions and answers
function displayGame() {
    var htmlContent = "<div class='page'";
    htmlContent = "<form>"; //opening form

    htmlContent += "<div class='timer' id='timerDiv'></div>"


    // Question One
    htmlContent += "<h2>What is Rudy's favorite Toy?</h2>";

    htmlContent += "<div style='text-align: center'>"


    htmlContent += "<label class='answers'> Carrot" //opening label
    htmlContent += "<input type='radio' value=carrot name=toy>";
    htmlContent += "</label>"


    htmlContent += "<label class='answers'> Beavie" //opening label
    htmlContent += "<input type='radio' value=beavie name=toy>";
    htmlContent += "</label>"


    htmlContent += "<label class='answers'> Fish Taco" //opening label
    htmlContent += "<input type='radio' value=fishTaco name=toy>";
    htmlContent += "</label>"


    htmlContent += "<label class='answers'> Duckie" //opening label
    htmlContent += "<input type='radio'  value=Duckie name=toy>";
    htmlContent += "</label>"


    htmlContent += "</div>"



    // Question Two

    htmlContent += "<h2>What is Rudy's Breed? </h2>";

    htmlContent += "<div style='text-align: center'>"

    htmlContent += "<label class='answers'>  Pug/ Chihuahua" //opening label
    htmlContent += "<input type='radio'  name=breed value=pychi> ";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Beagle/ Dachshound" //opening label
    htmlContent += "<input type='radio'  name=breed value=beada>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Chihuahua/ Cocker Spaniel" //
    htmlContent += "<input type='radio' name=breed value=chispy>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Cocker Spaniel/ Pug" //opening 
    htmlContent += "<input type='radio'  name=breed value=pugSpy>";
    htmlContent += "</label>"

    htmlContent += "</form>"; //closing form
    htmlContent += "</div>"


    // Question 3


    htmlContent += "<h2> How Old is Rudy? </h2>";

    htmlContent += "<div style='text-align: center'>"

    htmlContent += "<label class='answers'>  2 years old" //opening label
    htmlContent += "<input type='radio'  name=age value=2years> ";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> 3 years old" //opening label
    htmlContent += "<input type='radio'  name=age value=3years>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> 4 years old" //
    htmlContent += "<input type='radio' name=age value=4years>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> 5 years old" //opening 
    htmlContent += "<input type='radio'  name=age value=5years>";
    htmlContent += "</label>"

    htmlContent += "</form>"; //closing form
    htmlContent += "</div>"


    htmlContent += "<button id='stopButton' class='btn btn-secondary btn-lg btn-block submitstartbutton'>Submit Answers</button>"


    $(".gameDiv").html(htmlContent);

}

//This will write the time
function writeTime() {
    if (counter <= 0) {
        displayResults();
        stopTimer();
    }
    $("#timerDiv").html(counter);
    counter--;
}

//This starts the timer
function startTimer() {
    interval = setInterval(writeTime, 1000);
}

//This stops the timer
function stopTimer() {
    clearInterval(interval);
}

function quiz() {
    var numCorrectAnswers = 0;
    var numIncorrectAnswers = 0;
    var numUncheckedAnswers = 0;
    var correctAnswers = ["carrot", "chispy", "5years"];

    var firstUserAnswer = $("input[type=radio][name=toy]:checked").val();
    var secondUserAnswer = $("input[type=radio][name=breed]:checked").val();
    var thirdUserAnswer = $("input[type=radio][name=age]:checked").val();

    if (firstUserAnswer) {
        if (firstUserAnswer === correctAnswers[0]) {
            numCorrectAnswers++;
        } else {
            numIncorrectAnswers++;
        }
    } else {
        numUncheckedAnswers++;
    }

    if (secondUserAnswer) {
        if (secondUserAnswer === correctAnswers[1]) {
            numCorrectAnswers++;
        } else {
            numIncorrectAnswers++;
        }
    } else {
        numUncheckedAnswers++;
    }

    if (thirdUserAnswer) {
        if (thirdUserAnswer === correctAnswers[2]) {
            numCorrectAnswers++;
        } else {
            numIncorrectAnswers++;
        }
    } else {
        numUncheckedAnswers++;
    }


    return [numCorrectAnswers, numIncorrectAnswers, numUncheckedAnswers];
}

function displayResults() {
    var results = quiz();
    alert(results);
}
