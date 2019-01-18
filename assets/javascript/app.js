var start = $("#start-button");
var timer = $("#timer");
var pick = $("#pick-mix")
var questionIndexPick = 0;
var time = 30; //initialize timer to 30 seconds

var qsAs = [
    {
        question: "question here",
        answer: "answer here",
    }, 
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    },
    {
        question: "question here",
        answer: "answer here",
    }
];
var timerInt = setInterval(qTimer, 1000);
function qTimer() {
    time--;
    $(timer).html("<h2>" + time + "</h2>");
    if (time === 0) {
        stop();
    }
}
function gameStart() {
    $(start).hide();
    questionIdPick = Math.floor(Math.random() * (10 - 1));
    $(pick).text(qsAs[questionIdPick].question);
}

$(start).click(gameStart);