
const playerRed = "R";
const playerYellow = "Y";

const currentPlayer = playerRed;

const gameOver = false;

const board;

const rows = 6;
const columns = 7;

window.addEventListener = function() {
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
        }
    }

}