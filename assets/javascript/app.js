$( document ).ready(function() {
hidePickMix();
$("#timer-container").hide();

var questionId = 0;
var timer = 10;
var tickTock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var qsAs = [
    {
        question: "Who is the most recent winner of the Tour de France (as of 2018)?",
        answers: ["Tony Hawk", "Lance Armstrong", "Geraint Thomas", "Peter Sagan", "Chris Froome"],
        answerIndex: 2
    },
    {
        question: 'When was the first "safety bicycle" invented?',
        answers: ["1876", "1977", "1650", "1999", "1904"],
        answerIndex: 0
    },
    {
        question: 'What are the three "Grand Tours?"',
        answers: ["Tour Down Under, Tour de France, Tour of Britain", "Tour of California, Tour of Utah, Tour of the Gila", "Tour de Korea, Tour of Japan, Tour of China", "Paris-Roubaix, Ghent-Wevelgem, Kuurne-Brussels-Kuurne", "Tour de France, Giro d'Italia, Vuelta a Espana", ],
        answerIndex: 4
    },
    {
        question: "Who are considered the main 'inventors' of mountain biking?",
        answers: ["River Phoenix, Kevin Bacon, John Cusack", "Tom Ritchey, Joe Breeze, Gary Fisher", "Keith Bontrager, Davis Phinney, Charlie Cunningham", "Robert California, Fred McFriedrich, Otis Nyotis", "Eddy Merckx, Miguel Indurain, Jacques Antequil"],
        answerIndex: 1
    },
    {
        question: "Which of the following is NOT a banned substance under World Anti-Doping Association (WADA) regulations?",
        answers: ["Amphetamines", "Asthma inhalers", "Cannabis", "Codeine", "Blood transfusions"],
        answerIndex: 3
    },
    {
        question: "Which of the following is the most popular tire size for road cycling?",
        answers: ["R15", "26 inch", "650b", "700c", "29 inch"],
        answerIndex: 3
    },
    {
        question: "Which country has the highest number of bicycles per capita of any country?",
        answers: ["The Netherlands", "China", "Cuba", "France", "United States"],
        answerIndex: 0
    },
    {
        question: "What is the oldest bike manufacturer still in existence?",
        answers: ["Trek", "Bianchi", "Raleigh", "Huffy", "Peugeot"],
        answerIndex: 1
    },
    {
        question: "Which of the following teams is registered for the 2019 World Tour?",
        answers: ["US Postal Service", "Etixx - Quick-Step", "Bora - Hansgrohe", "Jelly Belly - Maxxis", "Shell Oil - Monsanto"],
        answerIndex: 2
    },
    {
        question: "When did BMX officially become an Olympic sport?",
        answers: ["2008", "1992", "2016", "1942", "1984"],
        answerIndex: 0
    }
];
//Durstenfeld shuffle
/*I was going to use this to shuffle and randomize answers array, couldn't get it to work
manually assigned order to answers array instead
function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    console.log(array);
  }*/

function resetResults() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}

function resetTime() {
    timer = 10;
}

function displayTime() {
    $("timer-container").show();
    $("#timer").text(timer);
    timer--;
    if(timer === -1) {
        hidePickMix();
        stopTime();
        $("#boom").show();
        $("#boom").html("<h2>Too slow! The correct answer is:<br> " + qsAs[questionId].answers[qsAs[questionId].answerIndex] + "</h2>");
        unanswered++;
        questionId++;
    }
    checkGameEnd();
}

function startTime() {
    clearInterval(tickTock);
    tickTock = setInterval(displayTime, 1000);
}

function stopTime() {
    clearInterval(tickTock);
    resetTime();
    if(questionId < qsAs.length - 1) {
        setTimeout(startTime, 2000);
        setTimeout(displayQuestion, 3000);
    }
}

function checkAnswer() {
    hidePickMix();
    if($(this).text() === qsAs[questionId].answers[qsAs[questionId].answerIndex]) {
        stopTime();
        $("#boom").show();
        $("#boom").html("<h2>You got it! The answer is:<br> " + qsAs[questionId].answers[qsAs[questionId].answerIndex] + "</h2>");
        correct++;
        questionId++;
    }
    else {
        stopTime();
        $("#boom").show();
        $("#boom").html("<h2>Oh no!!! The correct answer is:<br> " + qsAs[questionId].answers[qsAs[questionId].answerIndex] + "</h2>");
        incorrect++;
        questionId++;
    }
    checkGameEnd();
}

function showPickMix() {
    $("#question").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();
    $("#answer4").show();
    $("#answer5").show();
}

function hidePickMix() {
    $("#question").hide();
    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#answer5").hide();
}

function showResults() {
    $("#results").show();
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#unanswered").text("Unanswered: " + unanswered);
    $("#start").show();
    $("#start").text("Click Start above to play again!");
}

function hideResults() {
    $("#results").hide();
}

function displayQuestion () {
    $("#boom").hide();
    hideResults();
    $("#timer-container").show();
    showPickMix();
    //console.log(qsAs[questionId].answers[qsAs[questionId].answerIndex])
    //console.log([qsAs[questionId].answerIndex])
    $("#question").text(qsAs[questionId].question);
    $("#answer1").text(qsAs[questionId].answers[0]);
    $("#answer2").text(qsAs[questionId].answers[1]);
    $("#answer3").text(qsAs[questionId].answers[2]);
    $("#answer4").text(qsAs[questionId].answers[3]);
    $("#answer5").text(qsAs[questionId].answers[4]);
}

function checkGameEnd() {
    if(questionId === qsAs.length) {
        $("#timer-container").hide();
        showResults();
        questionId = 0;
        $("#start-button").show();
        $("#start-button").on("click", function() {
            resetResults();
        });
    }
}

function gameStart() {
    $("#start-button").hide();
    startTime();
    displayQuestion();
}

$("#answer1").on("click", checkAnswer) 
$("#answer2").on("click", checkAnswer)
$("#answer3").on("click", checkAnswer)
$("#answer4").on("click", checkAnswer)
$("#answer5").on("click", checkAnswer)
$("#start-button").click(gameStart);

});