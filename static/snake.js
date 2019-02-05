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
        let snake = [{
            coordinateX: 4,
            coordinateY: 0
        }, {
            coordinateX: 3,
            coordinateY: 0
        }, {
            coordinateX: 2,
            coordinateY: 0
        }, {
            coordinateX: 1,
            coordinateY: 0
        }];

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
        let newHead = {
            coordinateX: headX + 1,
            coordinateY: headY
        };
        snakeTail.setAttribute('class', 'grid');
        snake.pop();
        snake.unshift(newHead)
        }
drawBoard();
setInterval(drawSnake,60);

}