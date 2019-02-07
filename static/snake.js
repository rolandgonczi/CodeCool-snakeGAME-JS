let startGame = document.getElementById("start-game");

startGame.addEventListener("click", drawGame);

function drawGame() {


    let container = document.getElementById('container');
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    container.appendChild(table);
    let gameBoard = document.getElementById('table');


    function drawBoard() {
        for (let row = 0; row < 40; row++) {
            let rows = document.createElement('tr');
            rows.setAttribute('class', 'row');
            rows.setAttribute('id', 'id' + row);
            gameBoard.appendChild(rows);
            for (let col = 0; col < 40; col++) {
                let cols = document.createElement('td');
                cols.setAttribute('class', 'grid');
                cols.setAttribute('id', col + "," + row);
                cols.setAttribute('data-coordinate-x', String(col));
                cols.setAttribute('data-coordinate-y', String(row));
                rows.appendChild(cols);

            }
        }
    }


    let length = 5;
    let snake = [];

    for (let i = length - 1; i >= 0; i--) {
        snake.push({coordinateX: i, coordinateY: 0});
    }

    let direction = "right";

    document.addEventListener("keydown", getDirection);

    function getDirection(event) {
        if (event.keyCode == 38 && direction != "down") {
            direction = "up"
        } else if (event.keyCode == 40 && direction != "up") {
            direction = "down"
        } else if (event.keyCode == 37 && direction != "right") {
            direction = "left"
        } else if (event.keyCode == 39 && direction != "left") {
            direction = "right"
        }
    }

    let food = {
        x: Math.round(Math.random() * 39),
        y: Math.round(Math.random() * 39)
    };


    function drawFood(x, y) {
        for (let i = length - 1; i >= 0; i--) {
            if (snake[i].coordinateX == food.x && snake[i].coordinateY == food.y) {
                food = {
                    x: Math.round(Math.random() * 39),
                    y: Math.round(Math.random() * 39)
                };
            }
        }
        let foodGrid = document.getElementById(String(food.x) + "," + String(food.y))
        foodGrid.setAttribute("class", "food")
    }



    function drawSnake() {

        let tailX = snake[snake.length-1].coordinateX;
        let tailY = snake[snake.length-1].coordinateY;
        let snakeTail = document.getElementById(String(tailX) + "," + String(tailY));
        let headX = snake[0].coordinateX;
        let headY = snake[0].coordinateY;
        document.getElementById('score').textContent = 'Score: ' + String(snake.length-5);

        if( direction == "left" ) headX--;
        else if( direction == "up" ) headY--;
        else if( direction == "right" ) headX++;
        else if( direction == "down" ) headY++;

        drawFood(food.x, food.y);

        if (headX == food.x && headY == food.y) {
            for (let i = length - 1; i >= 0; i--) {
            if (snake[i].coordinateX == food.x && snake[i].coordinateY == food.y) {
                food = {
                    x: Math.round(Math.random() * 39),
                    y: Math.round(Math.random() * 39)
                    };
                }
            }
            var newHead = {
                coordinateX: headX,
                coordinateY: headY
            }
        }else {
            snakeTail.setAttribute('class', 'grid');
            snake.pop();
            newHead = {
            coordinateX: headX,
            coordinateY: headY
        };
        }

        snake.unshift(newHead);

        try {
            for (let i = 0; i < snake.length; i++) {
                let coordinateX = snake[i].coordinateX;
                let coordinateY = snake[i].coordinateY;
                let snakeGrid = document.getElementById(String(coordinateX) + "," + String(coordinateY));
                snakeGrid.setAttribute('class', 'snake');

            }
        }
        catch (TypeError) {
            alert('Game over!');
            window.location.reload();
        }



        for (let i = 1; i < snake.length; i++) {
            if (newHead.coordinateX === snake[i].coordinateX && newHead.coordinateY === snake[i].coordinateY) {
                alert('Game over, collision!');
                window.location.reload();
            }
        }
    }


drawBoard();
setInterval(drawSnake,100);

}