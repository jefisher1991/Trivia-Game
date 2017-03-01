// function- begin the trivia game- questions are not visible until this button is pushed. 

// timer starts- users will have a certain number of seconds to complete the questions, the timer starts when the user clicks on the start triva game

// timer will stop when users hit the "submit answers" button

// score of correct answers will appear as an alert when user clicks the "submit answers" button OR the timer runs out
var counter = 10;
var interval;
$(document).ready(function() {

    game(); //clean

});


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
    var htmlContent = "<div class='page' id='wholepage'";
    htmlContent = "<form>"; //opening form

    htmlContent += "<div id='timerDiv'></div>"

    // Question One
    htmlContent += "<h2>What is Rudy's favorite Toy?</h2>";

    htmlContent += "<div style='text-align: center'>"


    htmlContent += "<label class='answers'> Carrot" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' value=carrot name=toy>";
    htmlContent += "</label>"


    htmlContent += "<label class='answers'> Beavie" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' value=beavie name=toy>";
    htmlContent += "</label>"


    htmlContent += "<label class='answers'> Fish Taco" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' value=fishTaco name=toy>";
    htmlContent += "</label>"


    htmlContent += "<label class='answers'> Duckie" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' value=Duckie name=toy>";
    htmlContent += "</label>"


    htmlContent += "</div>"



    // Question Two

    htmlContent += "<h2>What is Rudy's Breed? </h2>";

    htmlContent += "<div style='text-align: center'>"

    htmlContent += "<label class='answers'>  Pug/ Chihuahua" //opening label
    htmlContent += "<input type='radio'  style= 'margin-left:7px' name=breed value=pychi> ";
    htmlContent += "</label>"

    htmlContent += "<label class='answers'> Beagle/ Dachshound" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=breed value=beada>";
    htmlContent += "</label>"

    htmlContent += "<label class='answers'> Chihuahua/ Cocker Spaniel" //
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=breed value=chispy>";
    htmlContent += "</label>"

    htmlContent += "<label class='answers'> Cocker Spaniel/ Pug" //opening 
    htmlContent += "<input type='radio'  style= 'margin-left:7px' name=breed value=pugSpy>";
    htmlContent += "</label>"

    htmlContent += "</form>"; //closing form
    htmlContent += "</div>"


    // Question 3


    htmlContent += "<h2> How Old is Rudy? </h2>";

    htmlContent += "<div style='text-align: center'>"

    htmlContent += "<label class='answers'>  2 years old" //opening label
    htmlContent += "<input type='radio'  style= 'margin-left:7px' name=age value=2years> ";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> 3 years old" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=age value=3years>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> 4 years old" //
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=age value=4years>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> 5 years old" //opening 
    htmlContent += "<input type='radio' style= 'margin-left:7px'  name=age value=5years>";
    htmlContent += "</label>"

    htmlContent += "</form>"; //closing form
    htmlContent += "</div>"

    // Question 4

    htmlContent += "<h2> What type of Kibble does Rudy eat? </h2>";

    htmlContent += "<div style='text-align: center'>"

    htmlContent += "<label class='answers'>  BLUE Wilderness" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=food value=BLUE> ";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> PURINA ProPlan" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=food value=Purina>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Simply Nourish Adult Dog Food" //
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=food value=Nourish>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Authority: Grain Free" //opening 
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=food value=Authority>";
    htmlContent += "</label>"

    htmlContent += "</form>"; //closing form
    htmlContent += "</div>"


// Question 5 


    htmlContent += "<h2> Which of these things does NOT scare Rudy</h2>";

    htmlContent += "<div style='text-align: center'>"

    htmlContent += "<label class='answers'>  Pumpkins" //opening label
    htmlContent += "<input type='radio'  style= 'margin-left:7px' name=fear value=pumpkin> ";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Thunderstorms" //opening label
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=fear value=storm>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Vacuum" //
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=fear value=vacuum>";
    htmlContent += "</label>"
    htmlContent += "<label class='answers'> Hockey Sticks" //opening 
    htmlContent += "<input type='radio' style= 'margin-left:7px' name=fear value=hockeysticks>";
    htmlContent += "</label>"

    htmlContent += "</form>"; //closing form
    htmlContent += "</div>"


    htmlContent += "<button id='stopButton' class='btn btn-secondary btn-lg btn-block submitstartbutton'>Submit Answers</button>"
   
    htmlContent += "<div id='resultsCorrect'></div>"
    htmlContent += "<div id='resultsIncorrect'></div>"
    htmlContent += "<div id='resultsUnanswered'></div>"

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
    var correctAnswers = ["carrot", "chispy", "5years", "BLUE", "storm"];

    var firstUserAnswer = $("input[type=radio][name=toy]:checked").val();
    var secondUserAnswer = $("input[type=radio][name=breed]:checked").val();
    var thirdUserAnswer = $("input[type=radio][name=age]:checked").val();
    var fourthUserAnswer = $("input[type=radio][name=food]:checked").val();
    var fifthUserAnswer = $("input[type=radio][name=fear]:checked").val();


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

    if (fourthUserAnswer) {
        if (fourthUserAnswer === correctAnswers[3]) {
            numCorrectAnswers++;
        } else {
            numIncorrectAnswers++;
        }
    } else {
        numUncheckedAnswers++;
    }

    if (fifthUserAnswer) {
        if (fifthUserAnswer === correctAnswers[4]) {
            numCorrectAnswers++;
        } else {
            numIncorrectAnswers++;
        }
    } else {
        numUncheckedAnswers++;
    }

$("#resultsCorrect").html("You answered " + numCorrectAnswers + " question(s) about Rudy correctly!");
$("#resultsIncorrect").html("You answered " + numIncorrectAnswers + " question(s) incorrectly about Rudy");
$("#resultsUnanswered").html("You did not answer " + numUncheckedAnswers + " question(s) about Rudy"); 
}


function displayResults() {
    var results = quiz();

}
