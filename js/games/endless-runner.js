const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacleOne');
const obstacleUnder = document.querySelector('.obstacleTwo');
const cherryOne = document.querySelector('.cherryOne');
const cherryTwo = document.querySelector('.cherryTwo');
const startButton = document.querySelector('.start-button');
const scoreDisplay = document.querySelector('.score');




let score = 0;
let isJumping = false;
let gameInterval;
let obstacleAnimationDuration = parseFloat(getComputedStyle(obstacle).animationDuration) * 1000; // in milliseconds
let circleAnimationDuration = parseFloat(getComputedStyle(cherryOne).animationDuration) * 1000; // in milliseconds
const MAX_GAME_DURATION = 10000; // Maximum game duration in milliseconds (10 seconds)
let elapsedTime = 0;

function jump() {
    if (isJumping) return;
    isJumping = true;
    player.style.transform = 'translateY(-100px)';
    setTimeout(() => {
        player.style.transform = 'translateY(0)';
        isJumping = false;
    }, 500);
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateTimer() {
    const secondsLeft = Math.ceil((MAX_GAME_DURATION - elapsedTime) / 1000);
    if (secondsLeft >= 0) {
        document.getElementById('timer').textContent = `Time left: ${secondsLeft}s`;
    }

    if (elapsedTime >= MAX_GAME_DURATION) {
        handleGameEnd();
    }

    elapsedTime += 10; // Increment elapsed time by 10 milliseconds (same as game loop interval)
}

function handleObstacleAnimation() {
    score++;
    updateScore();
    obstacle.style.right = '0';
    obstacleUnder.style.right = '0';
    cherryOne.style.right = '0';
    cherryTwo.style.right = '0';

    // Speed up the animations by 5% every 25 points
    if (score % 2 === 0) {
        obstacleAnimationDuration *= 0.9; // Decrease duration by 5%
        circleAnimationDuration *= 0.9; // Decrease duration by 5%
    }

    obstacle.style.animationDuration = `${obstacleAnimationDuration / 1000}s`;
    obstacleUnder.style.animationDuration = `${obstacleAnimationDuration / 1000}s`;
    cherryOne.style.animationDuration = `${circleAnimationDuration / 1000}s`;
    cherryTwo.style.animationDuration = `${circleAnimationDuration / 1000}s`;
}

obstacle.addEventListener('animationiteration', handleObstacleAnimation);

function checkCircleCollision(circle) {
    const circleRect = circle.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    if (
        playerRect.bottom >= circleRect.top &&
        playerRect.top <= circleRect.bottom &&
        playerRect.right >= circleRect.left &&
        playerRect.left <= circleRect.right
    ) {
        score += 10;
        updateScore();
        circle.style.display = 'none';

        setTimeout(() => {
            circle.style.display = 'block';
        }, 3000);
    }
}

function handleCollision() {
    clearInterval(gameInterval);
    startButton.disabled = false;
    const gameOverMessage = `Du suger kuk! Men du kan kalle deg Tittslord${score} allikevel!`;
    alert(gameOverMessage);
}

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    const obstacleUnderRect = obstacleUnder.getBoundingClientRect();

    if (
        (playerRect.bottom >= obstacleRect.top &&
        playerRect.top <= obstacleRect.bottom &&
        playerRect.right >= obstacleRect.left &&
        playerRect.left <= obstacleRect.right)
        ||
        (playerRect.bottom >= obstacleUnderRect.top &&
        playerRect.top <= obstacleUnderRect.bottom &&
        playerRect.right >= obstacleUnderRect.left &&
        playerRect.left <= obstacleUnderRect.right)
    ) {
        handleCollision();
    }

    checkCircleCollision(cherryOne);
    checkCircleCollision(cherryTwo);
}

function startGame() {
    score = 0;
    updateScore();
    player.style.transform = 'translateY(0)';
    obstacle.style.right = '0';
    obstacleUnder.style.right = '0';
    cherryOne.style.right = '0';
    cherryTwo.style.right = '0';
    cherryOne.style.display = 'block';
    cherryTwo.style.display = 'block';
    startButton.disabled = true;

    gameInterval = setInterval(() => {
        moveObstacle();
        checkCollision();
        updateTimer(); // Update the timer with each game loop iteration
    }, 10);

    function moveObstacle() {
        obstacle.style.right = parseInt(obstacle.style.right) + 1 + 'px';
        obstacleUnder.style.right = parseInt(obstacleUnder.style.right) + 1 + 'px';
        cherryOne.style.right = parseInt(cherryOne.style.right) + 1 + 'px';
        cherryTwo.style.right = parseInt(cherryTwo.style.right) + 1 + 'px';
    }
}

startButton.addEventListener('click', startGame);
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp') {
        jump();
    }
    if (event.code === 'Space') {
        startButton.click();
    }
});
