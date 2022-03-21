// (function addMarker() {
//     const gridItem = document.querySelectorAll(".grid-item");
//     gridItem.forEach((item) => {
//         item.addEventListener("click", () => {
//             item.textContent = "x";
//         });
//     });
// })();

// Two players (x and o)
// 9 div gameboard
// player has to be able to select x or o as their marker
// an array needs to be created to store their choices and grid positions?
// create logic that 3 in a row of one marker in specific grid positions will win the game or round
// create logic to stop players from choosing a spot already taken

const createPlayer = (name, marker) => {
    return { name, marker };
};

const gameBoard = (() => {
    const boardContainer = document.querySelector(".container");
    let board = [];
    // let marker = "X";

    const createArray = () => {
        for (let i = 0; i < 9; i++) {
            board.push("");
        }
        // console.log(board);
    };

    const createBoard = () => {
        board.forEach((item, index) => {
            const boardItem = document.createElement("div");
            boardItem.className = `board-item`;
            boardItem.dataset.number = index;
            boardContainer.appendChild(boardItem);
        });
    };

    const addMarker = () => {
        Array.from(boardContainer.children).forEach((item, index) => {
            item.addEventListener("click", () => {
                if (gameController.activePlayer === gameController.playerOne) {
                    item.textContent = gameController.activePlayer.marker;
                    board[index] = gameController.activePlayer.marker;
                    console.log(board);
                    gameController.activePlayer = gameController.playerTwo;
                } else if (
                    gameController.activePlayer === gameController.playerTwo
                ) {
                    item.textContent = gameController.activePlayer.marker;
                    board[index] = gameController.activePlayer.marker;
                    console.log(board);
                    gameController.activePlayer = gameController.playerOne;
                }
            });
        });
    };

    return { board, createArray, createBoard, addMarker };
})();

const gameController = (() => {
    gameBoard.createArray();
    gameBoard.createBoard();
    gameBoard.addMarker();

    const playerOne = createPlayer("Bob", "X");
    const playerTwo = createPlayer("Ross", "O");

    let activePlayer = playerOne;

    return { playerOne, playerTwo, activePlayer };
})();
