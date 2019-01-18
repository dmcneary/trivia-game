var start = $("#start-button");
var timer = $("#timer");
var pick = $("#pick-mix")
var questionIndexPick = 0;
var time = 30; //initialize timer to 30 seconds
var timerInt;

var qsAs = [
    {
        question: "Who is the most recent winner of the Tour de France (as of 2018)?",
        answer: "Geraint Thomas",
        decoy1: "Tony Hawk",
        decoy2: "Lance Armstrong",
        decoy3: "Peter Sagan",
        decoy4: "Chris Froome"
    }, 
    {
        question: 'When was the first "safety bicycle" invented?',
        answer: "1876",
        decoy1: "1977",
        decoy2: "1650",
        decoy3: "1999",
        decoy4: "1904"
    },
    {
        question: 'What are the three "Grand Tours?"',
        answer: "Tour de France, Giro d'Italia, Vuelta a España",
        decoy1: "Tour of California, Tour of Utah, Tour of the Gila",
        decoy2: "Tour Down Under, Tour de France, Tour of Britain",
        decoy3: "Tour de Korea, Tour of Japan, Tour of China",
        decoy4: "Paris-Roubaix, Ghent-Wevelgem, Kuurne-Brussels-Kuurne"
    },
    {
        question: "Who are considered the main 'inventors' of mountain biking?",
        answer: "Tom Ritchey, Joe Breeze, Gary Fisher",
        decoy1: "Keith Bontrager, Davis Phinney, Charlie Cunningham",
        decoy2: "Robert California, Fred McFriedrich, Otis Nyotis",
        decoy3: "River Phoenix, Kevin Bacon, John Cusack",
        decoy4: "Eddy Merckx, Miguel Indurain, Jacques Antequil"
    },
    {
        question: "Which of the following is NOT a banned substance under World Anti-Doping Association (WADA) regulations?",
        answer: "Codeine",
        decoy1: "Cannabis",
        decoy2: "Amphetamines",
        decoy3: "Asthma inhalers",
        decoy4: "Blood transfusions"
    },
    {
        question: "Which of the following is the most popular tire size for road cycling?",
        answer: "700c",
        decoy1: "26 inch",
        decoy2: "650b",
        decoy3: "29 inch",
        decoy4: "R15"
    },
    {
        question: "Which country has the highest number of bicycles per capita of any country?",
        answer: "The Netherlands",
        decoy1: "United States",
        decoy2: "China",
        decoy3: "Cuba",
        decoy4: "France"
    },
    {
        question: "What is the oldest bike manufacturer still in existence?",
        answer: "Bianchi",
        decoy1: "Trek",
        decoy2: "Raleigh",
        decoy3: "Peugeot",
        decoy4: "Huffy"
    },
    {
        question: "Which of the following teams is registered for the 2019 World Tour?",
        answer: "Bora - Hansgrohe",
        decoy1: "Etixx - Quick-Step",
        decoy2: "US Postal Service",
        decoy3: "Jelly Belly - Maxxis",
        decoy4: "Shell Oil - Monsanto"
    },
    {
        question: "When did BMX officially become an Olympic sport?",
        answer: "2008",
        decoy1: "1992",
        decoy2: "2016",
        decoy3: "1942",
        decoy4: "1984"
    }
];

function qTimer() {
    time--;
    $(timer).html("<h2>" + time + "</h2>");
    if (time === 0) {
        stop();
    }

function stop() {
    clearInterval();
}

}
function gameStart() {
    $(start).hide();
    questionIdPick = Math.floor(Math.random() * (10 - 1));
    $(timer).show();
    $(pick).text(qsAs[questionIdPick].question);
    timerInt = setInterval(qTimer, 1000);
    
}

$(start).click(gameStart);