
// 1.1 allows prompt to show up and give player 1/2 a name when I click the begin button
$('#begin').on('click', () => {
  const setName = prompt('Name your player 1');
  game.player1 = setName
  const name1 = new Player(game.player1)
  $one = $('#player1')
  $one.text(`Player 1: ${name1.name}`)

});



$('#begin').on('click', () => {
  const setName2 = prompt('Name your player 2');
  game.player2 = setName2
  const name2 = new Player(game.player2)
  $two = $('#player2')
  $two.text(`Player 2: ${name2.name}`)
});







// 1.1
class Player {
  constructor(name) { // what the user decides
    this.name = name
  }
}




// game object 
const game = {

  // nested array that mimic my game board
  board: [
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',]
  ],

  // 1.1 this holds my empty strings to fill in my player names and also sets playerOne to true 
  player1: '',
  player2: '',
  playerOne: true,



  //1.3 this allows me to let player 1&2 to put chip on the board and locate where they are on the board 
  locateChip: (e) => {
    // if(game.playerOne) === true, which is it is run the for loop
    const col = e.target.cellIndex
    // let row = e.target.parentElement.rowIndex
    
    
    if (game.playerOne) {

      // this logs the position on the board
      console.log(e.target.parentElement.rowIndex, "row")
      console.log(e.target.cellIndex, "col")

      // Checks the column from bottom to top
      for (let i = game.board.length - 1; i >= 0; i--) {
        // checks if lowest row/column has a value
        // if it does dont fill that one and move on

        // if the row/column is empty then fill it 
        if (!game.board[i][e.target.cellIndex]) {
          game.board[i][e.target.cellIndex] = 1;
          game.checkHorizontal();
          game.checkVertical(col);
          game.checkDiagonal(i,col);
          game.checkDiagonalRightSide(i,col);
          break;
        }
      }
      // this then changes playerOne to false so i can do my if statement
      game.playerOne = false
    } else {
      console.log(e.target.parentElement.rowIndex, "row")
      console.log(e.target.cellIndex, "col")
      for (let i = game.board.length - 1; i >= 0; i--) {
        if (!game.board[i][e.target.cellIndex]) {
          game.board[i][e.target.cellIndex] = 2;
          game.checkHorizontal();
          game.checkVertical(col);
          game.checkDiagonal(i,col);
          game.checkDiagonalRightSide(i,col);
          break;
        }
      }
      game.playerOne = true
    }
    game.loadBoard();
  },






  //1.4
  loadBoard: () => {

    // so this goes through both the row and column and allows me to fill something with red or yellow
    // const rows = document.querySelectorAll('tr');
    for (let i = 0; i < game.board.length; i++) {
      for (let o = 0; o < game.board[i].length; o++) {
        if (game.board[i][o] === 1) {
          rows[i].children[o].style.backgroundColor = "red"

        } else if (game.board[i][o] === 2) {
          rows[i].children[o].style.backgroundColor = "yellow"

        }
      }

    }
  },




  // 1.5 so this checks the horizontal size of both players
  checkHorizontal: () => {
    // console.log("yo")
    let player = null;
    let count = 0;

    // if game.player===true, then player is 1, else player is 2 , this lets me alternate between players 
    game.playerOne ? player = 1 : player = 2

    // this loops through the whole board and everytime is drops a chips it add +1 until it gets to 4 
    for (let i = 0; i < game.board.length; i++) {
      for (let o = 0; o < game.board[i].length; o++) {
        if (game.board[i][o] === player) {
          count++
          if (count === 4) {
            console.log(`player ${player} has won`)
            return
          }
        } else {
          count = 0
        }
      }
    }
  },


  // 1.6 i = row 1 , o = column2 
  checkVertical: (column) => {
    let player = null;
    let count = 0
    // console.log(column)
    game.playerOne ? player = 1 : player = 2
    // looping through each row 
    for (let i = 0; i < game.board.length; i++) {
      // passing column
      if (game.board[i][column] === player) {
        count++
        // console.log(count)
        if (count === 4) {
          console.log(`player ${player} has won`)
          return
        }

      } else {
        count = 0
      }
    }

  },

  //1.7 check the top left to bottom
  checkDiagonal: (row,col) => {
    let player = null;
    let count = 1

    game.playerOne ? player = 1 : player = 2
    // i = row, o = column 
    for (let i = 1; i < game.board.length; i++) {
      // for (let o = 1; o < game.board[i].length - 3; o++) {
        // its going down a row and to the right side 
        if (game.board[row + i] && game.board[row + i][col + i ] === player) {
          count++
          if (count === 4) {
            console.log(`player ${player} has won`)
            return
          }
        }
        else {
          count = 1
        }
      }
    },
  // 1.8 check diagonal from the right side 
  checkDiagonalRightSide: (row,col) => {
    let player = null;
    let count = 1;

    game.playerOne ? player = 1 : player = 2

    for(let i = 1; i < game.board.length; i++){
      // checking if row exist, and then checking if the values are there 1/2
      if(game.board[row + i] && game.board[row  + i][col - i] === player) {
        count ++
        if(count === 4){
          console.log(`player ${player} has won`)
          return;
        }
      } 
    else {
      count = 1 
    }
    }

  }
  
};




//-row + column


//1.2  this is the event listener that loops through each single cell and lets me click on the on to locate the chip and change the color 
const rows = document.querySelectorAll('tr');
  const button = document.querySelectorAll('.button')
for(let i = 0; i<button.length; i++) {
    button[i].addEventListener('click', game.locateChip)

}










