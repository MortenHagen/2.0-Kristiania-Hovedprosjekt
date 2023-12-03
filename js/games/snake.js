const boardSize = 20;
const gameBoard = document.querySelector(".game-board");
const scoreDisplay = document.querySelector(".score");
const startButton = document.querySelector(".start-button");

let snake = [];
let food = {};
let direction;
let score = 0;
let gameInterval;

function initializeGame() {
    snake = [{ x: 10, y: 10 }];
    food = generateFoodPosition();
    direction = "right";
    score = 0;
    updateScoreDisplay();
    draw();
}

function generateFoodPosition() {
    let position;
    do {
        position = {
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize)
        };
    } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
    return position;
}

function draw() {
    gameBoard.innerHTML = "";
    snake.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y + 1;
        snakeElement.style.gridColumnStart = segment.x + 1;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });

    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y + 1;
    foodElement.style.gridColumnStart = food.x + 1;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function handleGameEnd() {
    clearInterval(gameInterval);
    const result = confirm("Game Over! Din superduper-score: " + score + "\nSkal ikke ta'så spille en gang til a'?");
    if (result) {
        initializeGame();
        startGame();
    } else {
        startButton.disabled = false;
        startButton.textContent = "Kan ikke bare knulle og ha det gøy, sa kjærringa og satte mannen til å vaske huset";
    }
}

function moveSnake() {
    const head = { ...snake[0] };
    switch (direction) {
        case "up":
            head.y -= 1;
            break;
        case "down":
            head.y += 1;
            break;
        case "left":
            head.x -= 1;
            break;
        case "right":
            head.x += 1;
            break;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = generateFoodPosition();
        updateScoreDisplay();
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];
    if (
        head.x < 0 ||
        head.x >= boardSize ||
        head.y < 0 ||
        head.y >= boardSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        handleGameEnd();
    }
}

function startGame() {
    gameInterval = setInterval(() => {
        moveSnake();
        checkCollision();
        draw();
    }, 140 - score * 5);
}

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (direction !== "down") direction = "up";
            break;
        case "ArrowDown":
            if (direction !== "up") direction = "down";
            break;
        case "ArrowLeft":
            if (direction !== "right") direction = "left";
            break;
        case "ArrowRight":
            if (direction !== "left") direction = "right";
            break;
    }
});

startButton.addEventListener("click", () => {
    if (!gameInterval) {
        initializeGame();
        startButton.disabled = true;
        startGame();
    }
});

document.addEventListener('keydown', (event) => {
    if (!gameInterval && event.key === 'Enter') {
        initializeGame();
        startButton.disabled = true;
        startGame();
    }
});