let startGame = document.getElementById("start-game");

startGame.addEventListener("click", drawGame);

function drawGame() {
    let container = document.getElementById('container');
    let table = document.getElementById('table');
    function drawboard(){
        for (let row=0; row < 40; row++){
            let rows = document.createElement('tr');
            rows.setAttribute('class', 'row');
            rows.setAttribute('id', 'id' + row);
            table.appendChild(rows);
            for (let col=0; col<40; col++){
                let cols = document.createElement('td');
                cols.setAttribute('class', 'col');
                cols.setAttribute('id', 'ids' + col);
                rows.appendChild(cols);

            }
        }

    }
drawboard()








































}