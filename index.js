
const playerRed = "R";
const playerYellow = "Y";

const currentPlayer = playerRed;

const gameOver = false;

var board;

const rows = 6;
const columns = 7;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];

    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.puush(' ');

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }

}

function setPiece() {
    if (gameOver) {
        return;
    }
    let coordinates = this.id.split("-");
    let r = p
     
}