let startGame = document.getElementById("start-game");

startGame.addEventListener("click", drawGame);

function drawGame() {
    let container = document.getElementById('container');
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    container.appendChild(table);
    let gameBoard = document.getElementById('table');

    function drawboard(){
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
    function drawSnake() {
        let snake = [{
            coordinateX: 4,
            coordinateY: 0
        },{
            coordinateX: 3,
            coordinateY: 0
        },{
            coordinateX: 2,
            coordinateY: 0
        },{
            coordinateX: 1,
            coordinateY: 0
        }]
        let headX = snake[0].coordinateX;
        let headY = snake[0].coordinateY;
        for (let i=0; i<snake.length; i++){
            let coordinateX = snake[i].coordinateX;
            let coordinateY = snake[i].coordinateY;
            let snakeGrid = document.getElementById(String(coordinateX)+","+ String(coordinateY));
            snakeGrid.setAttribute('class', 'snake')

            }
    }
drawboard();
drawSnake()







































}