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
  score1: 0,
  score2: 0,
  playerOne: true,


  createBoard(){


  },


  player1Move(){

  },


  player2Move(){

  },


  checkWinner(){

  },



  locateChip: (e) => {
    if(this.playerOne){
      console.log(e.target.cellIndex, "col")
      console.log(e.target.parentElement.rowIndex, "row")
      e.target.style.backgroundColor = "red"
      this.playerOne = false
    } else {
      console.log(e.target)
      e.target.style.backgroundColor = "yellow"
      console.log(e.target.cellIndex, "col")
      console.log(e.target.parentElement.rowIndex, "row")
      this.playerOne = true
    }
  }

};



const button = document.querySelectorAll('.button')
for(let i = 0; i < button.length; i++) {
button[i].addEventListener('click', game.locateChip)

}


const color = 'red'

const mike = 'thank you!'