const objective = document.getElementById('objective');
objective.addEventListener('click', upScore);
const score = document.getElementById('score');

const HEIGHT_CONTAINER = 60;
const WIDTH_CONTAINER = 60;

const WIDTH_PLAYER = 2;
const HEIGHT_PLAYER = 2;


function move() {
    objective.style.marginLeft = Math.random() * (WIDTH_CONTAINER - WIDTH_PLAYER) + 'vw';
    objective.style.marginTop = Math.random() * (HEIGHT_CONTAINER - HEIGHT_PLAYER) + 'vh';
}

function upScore() {
    const scoreCurrent = Number(score.innerText) + 1;
    score.innerText = scoreCurrent;

    move();
}
