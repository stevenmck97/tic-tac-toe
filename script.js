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
    const playerMessage = document.querySelector("p");
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
                console.log(gameController.activePlayer);
                if (gameController.activePlayer === gameController.playerOne) {
                    if (item.textContent === "X" || item.textContent === "O") {
                        console.log("error");
                    } else {
                        item.textContent = gameController.activePlayer.marker;
                        board[index] = gameController.activePlayer.marker;
                        playerMessage.textContent = `It's your turn ${gameController.playerTwo.name}`;
                        gameController.activePlayer = gameController.playerTwo;
                        gameController.checkWinner();
                    }
                } else if (
                    gameController.activePlayer === gameController.playerTwo
                ) {
                    if (item.textContent === "X" || item.textContent === "O") {
                        console.log("error");
                    } else {
                        item.textContent = gameController.activePlayer.marker;
                        board[index] = gameController.activePlayer.marker;
                        playerMessage.textContent = `It's your turn ${gameController.playerOne.name}`;
                        gameController.activePlayer = gameController.playerOne;
                        gameController.checkWinner();
                    }
                }
            });
        });
    };

    return { board, createArray, createBoard, addMarker, playerMessage };
})();

const gameController = (() => {
    gameBoard.createArray();
    gameBoard.createBoard();
    gameBoard.addMarker();

    const playerOne = createPlayer("Bob", "X");
    const playerTwo = createPlayer("Ross", "O");

    let activePlayer = playerOne;

    const checkWinner = () => {
        const winningMoves = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        //gets each element eg. [0,1,2] is the first element.
        winningMoves.forEach((item) => {
            if (
                // iterates through the elements' elements
                gameBoard.board[item[0]] === activePlayer.marker &&
                gameBoard.board[item[1]] === activePlayer.marker &&
                gameBoard.board[item[2]] === activePlayer.marker
            ) {
                console.log(`${activePlayer.name} is the winner!`);
                gameBoard.playerMessage.textContent = `${activePlayer.name} is the winner!`;

                console.log(gameBoard.board);
            }
        });
    };

    return { playerOne, playerTwo, activePlayer, checkWinner };
})();
