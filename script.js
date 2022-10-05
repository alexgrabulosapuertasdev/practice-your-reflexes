const objective = document.getElementById('objective');
const score = document.getElementById('score');
const start = document.getElementById('start');
start.addEventListener('click', startGame);
const time = document.getElementById('time');

const HEIGHT_CONTAINER = 60;
const WIDTH_CONTAINER = 60;

const HEIGHT_PLAYER = 2;
const WIDTH_PLAYER = 2;

const MAX_SCORE = 60;

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
    clearInterval(intervalDownTime);
    alert('GAME OVER! Try again!');
    location.reload();
}

function move() {
    objective.style.marginLeft = Math.random() * (WIDTH_CONTAINER - WIDTH_PLAYER) + 'vw';
    objective.style.marginTop = Math.random() * (HEIGHT_CONTAINER - HEIGHT_PLAYER) + 'vh';
}

function startGame() {
    objective.addEventListener('click', upScore);
    intervalDownTime = setInterval(downTime, 1000);
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
    clearInterval(intervalDownTime);
    alert('CONGRATULATIONS! You\'ve won!');
    location.reload();
}
