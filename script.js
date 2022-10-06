const objective = document.getElementById('objective');
const score = document.getElementById('score');
const start = document.getElementById('start');
start.addEventListener('click', startGame);
const textLose = document.getElementById('text-lose');
const textWin = document.getElementById('text-win');
const time = document.getElementById('time');

const HEIGHT_CONTAINER = 60;
const WIDTH_CONTAINER = 60;

const HEIGHT_PLAYER = 2;
const WIDTH_PLAYER = 2;

const INITIAL_SCORE = 0;
const MAX_SCORE = 60;

const INITIAL_TIME = 60;
const LIMIT_TIME = 0;

let intervalDownTime;

function downTime() {
    const currentTime = Number(time.innerText) - 1;
    time.innerText = currentTime;

    if (currentTime <= LIMIT_TIME) {
        gameOver();
        return;
    }
}

function gameOver() {
    stopGame();
    textLose.classList.remove('disabled');
}

function move() {
    objective.style.marginLeft = Math.random() * (WIDTH_CONTAINER - WIDTH_PLAYER) + 'vw';
    objective.style.marginTop = Math.random() * (HEIGHT_CONTAINER - HEIGHT_PLAYER) + 'vh';
}

function resetValues() {
    clearInterval(intervalDownTime);
    score.innerText = INITIAL_SCORE;
    time.innerText = INITIAL_TIME;
    textLose.classList.add('disabled');
    textWin.classList.add('disabled');
}

function startGame() {
    resetValues();
    objective.addEventListener('click', upScore);
    intervalDownTime = setInterval(downTime, 1000);
}

function stopGame() {
    objective.removeEventListener('click', upScore);
    clearInterval(intervalDownTime);
}

function upScore() {
    const scoreCurrent = Number(score.innerText) + 1;
    score.innerText = scoreCurrent;

    if (scoreCurrent >= MAX_SCORE) {
        win();
        return;
    }

    move();
}

function win() {
    stopGame();
    textWin.classList.remove('disabled');
}
