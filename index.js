//interactive elements
const frogger = document.querySelectorAll('#frogger');
const purpleCar = document.querySelectorAll('#purple-car');
const raceCar = document.querySelectorAll('#race-car');
const redCar = document.querySelectorAll('#red-car');
const whiteCar = document.querySelectorAll('#white-car');
const logOne = document.querySelectorAll('#log-one');
const logTwo = document.querySelectorAll('#log-two');
const turtleOne = document.querySelectorAll('#turtle-one');
const turtleTwo = document.querySelectorAll('#turtle-two');

// interface elements
const leftButton = document.getElementsByClassName("left-button");
const forwardButton = document.getElementsByClassName("forward-button");
const rightButton = document.getElementsByClassName("right-button");
const backButton = document.getElementsByClassName("back-button");
const startButton = document.getElementsByClassName("start");
const resetButton = document.getElementsByClassName("reset");
const slowButton = document.getElementsByClassName("slow");
const mediumButton = document.getElementsByClassName("medium");
const fastButton = document.getElementsByClassName("fast");

let winCondition = false;
// frogger start pos
let columnPos = 5;
let rowPos = 11;

// car start pos
let purpleStart = 9;
let raceStart = 1;
let redStart = 1;
let whiteStart = 9;
let logOneStart = 1;
let logTwoStart = 7;
let turtleOneStart = 7;
let turtleTwoStart = 1;

// item speeds
let purpleCarSpeed = 1000;
let raceCarSpeed = 500;
let redCarSpeed = 750;
let whiteCarSpeed = 600;
let logOneSpeed = 700;
let logTwoSpeed = 550;
let turtleOneSpeed = 600;
let turtleTwoSpeed = 500;

document.addEventListener('keydown', function(event){
    e = event;
    if(e.keyCode === 38){
        // up arrow
        forward();
    } else if(e.keyCode === 40){
        // down arrow
        back();
    } else if(e.keyCode === 37){
       // left arrow
       left();
    } else if(e.keyCode === 39){
       // right arrow
       right();
    } else if(e.keyCode === 13){
        // start
        start();
    } else if(e.keyCode === 82){
        // reset
        reset();
    } else if(e.keyCode === 83){
        // slow
        slow();
    } else if(e.keyCode === 77){
        // mediumm
        medium();
    } else if(e.keyCode === 70){
        // fast
        fast();
    }
});

function reset(){
    location.reload();
    return false;
}

function hop(){
    frogger[0].classList.toggle("hop-effect");

    let f = frogger[0].getBoundingClientRect();
    let p = purpleCar[0].getBoundingClientRect();
    let race = raceCar[0].getBoundingClientRect();
    let red = redCar[0].getBoundingClientRect();
    let w = whiteCar[0].getBoundingClientRect();
    let l1 = logOne[0].getBoundingClientRect();
    let l2 = logTwo[0].getBoundingClientRect();
    let t1 = turtleOne[0].getBoundingClientRect();
    let t2 = turtleTwo[0].getBoundingClientRect();

    if(f.right === p.left && f.y === p.y){
        reset();
    }

    if(f.left === race.right && f.y === race.y){
        reset();
    }

    if(f.left === red.right && f.y === red.y){
        reset();
    }

    if(f.right === w.left && f.y === w.y){
        reset();
    }

    if(rowPos === 1){
        if(columnPos === 1 || 3 || 5 || 7 || 9){
            winCondition = true;
            clearInterval(purpleInterv);
            clearInterval(raceInterv);
            clearInterval(redInterv);
            clearInterval(whiteInterv);
            clearInterval(logOneInterv);
            clearInterval(logTwoInterv);
            clearInterval(turtleOneInterv);
            clearInterval(turtleTwoInterv);
        }
    }
}

function slow(){
    purpleCarSpeed = 1000;
    raceCarSpeed = 500;
    redCarSpeed = 750;
    whiteCarSpeed = 600;
    logOneSpeed = 700;
    logTwoSpeed = 550;
    turtleOneSpeed = 600;
    turtleTwoSpeed = 500;
}

function medium(){
    purpleCarSpeed = 900;
    raceCarSpeed = 400;
    redCarSpeed = 650;
    whiteCarSpeed = 500;
    logOneSpeed = 600;
    logTwoSpeed = 450;
    turtleOneSpeed = 500;
    turtleTwoSpeed = 400;
}

function fast(){
    purpleCarSpeed = 800;
    raceCarSpeed = 300;
    redCarSpeed = 550;
    whiteCarSpeed = 400;
    logOneSpeed = 500;
    logTwoSpeed = 350;
    turtleOneSpeed = 400;
    turtleTwoSpeed = 300;
}

leftButton[0].addEventListener('click', left);
forwardButton[0].addEventListener('click', forward);
rightButton[0].addEventListener('click', right);
backButton[0].addEventListener('click', back);
startButton[0].addEventListener('click', start);
resetButton[0].addEventListener('click', reset);
slowButton[0].addEventListener('click', slow);
mediumButton[0].addEventListener('click', medium);
fastButton[0].addEventListener('click', fast);

function forward(){
    if(rowPos > 1){
        forwardButton[0].classList.toggle("pressed-down");
        let newRow = rowPos - 1;
        rowPos = newRow;
        hop();
        frogger[0].style.gridRowStart = newRow;
    }
    return;
}

function left(){
    if(columnPos > 0){
        leftButton[0].classList.toggle("pressed-down");
        let newCol = columnPos - 1;
        columnPos = newCol;
        hop();
        frogger[0].style.gridColumnStart = newCol;
    } 
    return;
}

function right(){
    if(columnPos < 9){
        rightButton[0].classList.toggle("pressed-down");
        let newCol = columnPos + 1;
        columnPos = newCol;
        hop();
        frogger[0].style.gridColumnStart = newCol;
    }
    return;
}

function back(){
    if(rowPos < 11){
        backButton[0].classList.toggle("pressed-down");
        let newRow = rowPos + 1;
        rowPos = newRow;
        hop();
        frogger[0].style.gridRowStart = newRow;
    }
    return;
}

var purpleInterv;
var raceInterv;
var redInterv;
var whiteInterv;
var logOneInterv;
var logTwoInterv;
var turtleOneInterv;
var turtleTwoInterv;

function start(){
    purpleInterv = setInterval(movePurpleCar, purpleCarSpeed);
    raceInterv = setInterval(moveRaceCar, raceCarSpeed);
    redInterv = setInterval(moveRedCar, redCarSpeed);
    whiteInterv = setInterval(moveWhiteCar, whiteCarSpeed);
    logOneInterv = setInterval(moveLogOne, logOneSpeed);
    logTwoInterv = setInterval(moveLogTwo, logTwoSpeed);
    turtleOneInterv = setInterval(moveTurtleOne, turtleOneSpeed);
    turtleTwoInterv = setInterval(moveTurtleTwo, turtleTwoSpeed);
}

function movePurpleCar(){
    if(purpleStart < 2){
        purpleStart = 10;
    }
    let x = purpleStart - 1;
    purpleCar[0].style.gridColumnStart = x;
    purpleStart--;
}

function moveRaceCar(){
    if(raceStart > 8){
        raceStart = 0;
    }
    let x = raceStart + 1;
    raceCar[0].style.gridColumnStart = x;
    raceStart++;
}

function moveRedCar(){
    if(redStart > 8){
        redStart = 0;
    }
    let x = redStart + 1;
    redCar[0].style.gridColumnStart = x;
    redStart++;
}

function moveWhiteCar(){
    if(whiteStart < 2){
        whiteStart = 10;
    }
    let x = whiteStart - 1;
    whiteCar[0].style.gridColumnStart = x;
    whiteStart--;
}

function moveLogOne(){
    if(logOneStart > 10){
        logOneStart = 0;
    }
    let x = logOneStart + 1;
    logOne[0].style.gridColumnStart = x;
    logOneStart++;
}

function moveLogTwo(){
    if(logTwoStart < 0){
        logTwoStart = 10;
    }
    let x = logTwoStart - 1;
    logTwo[0].style.gridColumnStart = x;
    logTwoStart--;
}

function moveTurtleOne(){
    if(turtleOneStart < 1){
        turtleOneStart = 10;
    }
    let x = turtleOneStart - 1;
    turtleOne[0].style.gridColumnStart = x;
    turtleOneStart --;
}

function moveTurtleTwo(){
    if(turtleTwoStart > 10){
        turtleTwoStart = 0;
    }
    let x = turtleTwoStart + 1;
    turtleTwo[0].style.gridColumnStart = x;
    turtleTwoStart++;
}