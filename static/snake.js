let startGame = document.getElementById("start-game");

startGame.addEventListener("click", drawGame);


function drawGame() {


    let container = document.getElementById('container');
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    container.appendChild(table);
    let gameBoard = document.getElementById('table');



    function drawBoard(){
        for (let row=0; row < 40; row++){
            let rows = document.createElement('tr');
            rows.setAttribute('class', 'row');
            rows.setAttribute('id', 'id' + row);
            gameBoard.appendChild(rows);
            for (let col=0; col<40; col++){
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

    for(let i = length-1; i >= 0; i--) {
        snake.push({coordinateX:i,coordinateY:0});
    }

    let direction = "right";

    document.addEventListener("keydown", getDirection);

    function getDirection(event) {
        if(event.keyCode == 38 && direction != "down") {
            direction = "up"
        }else if (event.keyCode == 40 && direction != "up") {
            direction = "down"
        }else if (event.keyCode == 37 && direction != "right") {
            direction = "left"
        }else if(event.keyCode == 39 && direction != "left") {
            direction = "right"
        }
    }


    function drawSnake() {

        let tailX = snake[snake.length-1].coordinateX;
        let tailY = snake[snake.length-1].coordinateY;
        let snakeTail = document.getElementById(String(tailX) + "," + String(tailY));
        for (let i = 0; i < snake.length; i++) {
            let coordinateX = snake[i].coordinateX;
            let coordinateY = snake[i].coordinateY;
            let snakeGrid = document.getElementById(String(coordinateX) + "," + String(coordinateY));
            snakeGrid.setAttribute('class', 'snake')
        }
        let headX = snake[0].coordinateX;
        let headY = snake[0].coordinateY;

        if( direction == "left" ) headX--;
        else if( direction == "up" ) headY--;
        else if( direction == "right" ) headX++;
        else if( direction == "down" ) headY++;

        let newHead = {
            coordinateX: headX,
            coordinateY: headY
        };
        snakeTail.setAttribute('class', 'grid');
        snake.pop();
        snake.unshift(newHead)
        }


drawBoard();
setInterval(drawSnake,100);

}