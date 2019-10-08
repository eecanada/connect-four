  
  // allows prompt to show up and give player 1/2 a name
  $('#begin').on('click',()=>{
  const setName = prompt('Name your player 1');
  game.player1 = setName 
  const name1 = new Player (game.player1)
  $one = $('#player1')
  $one.text(`Player 1: ${name1.name}`)
  
  });
  
  
  
  $('#begin').on('click',()=>{
    const setName2 = prompt('Name your player 2');
    game.player2 = setName2 
    const name2 = new Player (game.player2)
    $two = $('#player2')
    $two.text(`Player 2: ${name2.name}`)
  });
    
  
  class Player {
    constructor(name){ // what the user decides
    this.name = name 
    }
  }
  



// game object 
const game = {
  board: [
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',]    
  ],

  //name
  player1: '',
  player2: '',
  score: 0,
  playerOne: true,

  checkWinner(){
    // if (game.board === )

  },


// this allows me let player 1/2 put chip on the board and locate where they are on the board 
  locateChip: (e) => {
    if(game.playerOne){
      // console.log(e.target)
      // e.target.style.backgroundColor = "red"
      console.log(e.target.cellIndex, "col")
      console.log(e.target.parentElement.rowIndex, "row")
      // game.board.push(e.target) // this would push the value into the array


      // Checks the column from bottom to top
      for(let i = game.board.length - 1; i >= 0; i--){
        // checks if lowest row/column has a value
        // if it does dont fill that one and move on
        
        // if the row/column is empty then fill it
        if(!game.board[i][e.target.cellIndex]){
          game.board[i][e.target.cellIndex] = 1;
          break;
        }
      }

      // game.board[e.target.parentElement.rowIndex][e.target.cellIndex] = 1;
      game.playerOne = false
    } else {
      // console.log(e.target)
      // e.target.style.backgroundColor = "yellow"
      console.log(e.target.cellIndex, "col")
      console.log(e.target.parentElement.rowIndex, "row")


      for(let i = game.board.length - 1; i >= 0; i--){
        if(!game.board[i][e.target.cellIndex]){
          game.board[i][e.target.cellIndex] = 2;
          break;
        }
      }

      // game.board[e.target.parentElement.rowIndex][e.target.cellIndex] = 2;
      // game.board.push(e.target)
      game.playerOne = true
    }
    game.loadBoard();
  },

  loadBoard: () => {

    
    // const rows = document.querySelectorAll('tr');
    for (let i = 0; i < game.board.length; i++) {
      for (let o = 0; o < game.board[i].length; o++){
        if (game.board[i][o] === 1 ){
          rows[i].children[o].style.backgroundColor = "red"
        } else if (game.board[i][o] === 2){
          rows[i].children[o].style.backgroundColor = "yellow"
        }
      }
      
    }
  }

};

const rows = document.querySelectorAll('tr');
// 
const button = document.querySelectorAll('.button')
for(let i = 0; i < button.length; i++) {
button[i].addEventListener('click', game.locateChip)
}
