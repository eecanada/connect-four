
$('#begin').on('click', () => {
    const setName = prompt('Please name Player 1:');
    game.player1 = setName
    const name1 = new Player(game.player1)
    $one = $('#player1')
    $one.text(`Player 1: ${name1.name}`)

});



$('#begin').on('click', () => {
    const setName2 = prompt('Please name Player 2:');
    game.player2 = setName2
    const name2 = new Player(game.player2)
    $two = $('#player2')
    $two.text(`Player 2: ${name2.name}`)
});



let chipAudio = new Audio('audio/chipNoise.mp3');



let popUpBox = document.getElementById("pop-up-box");
let popUpText = document.getElementById("pop-up-text");
document.getElementById("rematch").addEventListener("click", function() {

    location.reload();
});




class Player {
    constructor(name) { 
        this.name = name
    }
}




const game = {

    board: [
        ['', '', '', '', '', '', '', ],
        ['', '', '', '', '', '', '', ],
        ['', '', '', '', '', '', '', ],
        ['', '', '', '', '', '', '', ],
        ['', '', '', '', '', '', '', ],
        ['', '', '', '', '', '', '', ]
    ],

    
    player1: '',
    player2: '',
    playerOne: true,



    
    locateChip: (e) => {
        const col = e.target.cellIndex


        if (game.playerOne) {

            console.log(e.target.parentElement.rowIndex, "row")
            console.log(e.target.cellIndex, "col")

            for (let i = game.board.length - 1; i >= 0; i--) {
               

                if (!game.board[i][e.target.cellIndex]) {
                    game.board[i][e.target.cellIndex] = 1;
                    game.checkHorizontal();
                    game.checkVertical(col);
                    game.checkDiagonal(i, col);
                    game.checkDiagonalRightSide(i, col);
                    break;
                }
            }
           
            game.playerOne = false
        } else {
            console.log(e.target.parentElement.rowIndex, "row")
            console.log(e.target.cellIndex, "col")
            for (let i = game.board.length - 1; i >= 0; i--) {
                if (!game.board[i][e.target.cellIndex]) {
                    game.board[i][e.target.cellIndex] = 2;
                    game.checkHorizontal();
                    game.checkVertical(col);
                    game.checkDiagonal(i, col);
                    game.checkDiagonalRightSide(i, col);
                    break;
                }
            }
            game.playerOne = true
        }
        game.loadBoard();
    },






    
    loadBoard: () => {
        for (let i = 0; i < game.board.length; i++) {
            for (let o = 0; o < game.board[i].length; o++) {
                if (game.board[i][o] === 1) {
                    rows[i].children[o].style.backgroundColor = 'purple'
                    chipAudio.play();
                } else if (game.board[i][o] === 2) {
                    rows[i].children[o].style.backgroundColor = "orange"
                    chipAudio.play();
                }
            }
        }
    },

    checkHorizontal: () => {
        let player = null;
        let count = 0;
        game.playerOne ? player = 1 : player = 2
        for (let i = 0; i < game.board.length; i++) {
            for (let o = 0; o < game.board[i].length; o++) {
                if (game.board[i][o] === player) {
                    count++
                    if (count === 4) {
                        popUpText.innerHTML = `Player ${player} has won!`
                        popUpBox.style.display = 'block'
                        return
                    }
                } else {
                    count = 0
                }
            }
        }
    },

    checkVertical: (column) => {
        let player = null;
        let count = 0
        game.playerOne ? player = 1 : player = 2
        for (let i = 0; i < game.board.length; i++) {
            if (game.board[i][column] === player) {
                count++
                if (count === 4) {
                    popUpText.innerHTML = `Player ${player} has won!`
                    popUpBox.style.display = 'block'
                    return
                }

            } else {
                count = 0
            }
        }

    },

    checkDiagonal: (row, col) => {
        let player = null;
        game.playerOne ? player = 1 : player = 2
        for (let i = 0; i < 3; i++) {
            for (let o = 0; o < game.board[i].length; o++) {
                if (game.board[i][o] === player && game.board[i + 1][o + 1] === player && game.board[i + 2][o + 2] === player && game.board[i + 3][o + 3] === player) {
                    popUpText.innerHTML = `Player ${player} has won!`
                    popUpBox.style.display = 'block'
                    return
                }
            }
        }
    },

    checkDiagonalRightSide: (row, col) => {
        let player = null;


        game.playerOne ? player = 1 : player = 2

        for (let i = 0; i < 3; i++) {
            for (let o = 0; o < game.board[i].length; o++) {
                if (game.board[i][o] === player && game.board[i + 1][o - 1] === player && game.board[i + 2][o - 2] === player && game.board[i + 3][o - 3] === player) {
                    popUpText.innerHTML = `Player ${player} has won!`
                    popUpBox.style.display = 'block'
                    return;
                }
            }

        }
    }


};

const rows = document.querySelectorAll('tr'); 
const button = document.querySelectorAll('.button') 
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', game.locateChip)
}