
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
player1: '',
player2: '',
score1: 0,
score2: 0,


player1Choice(){

},


player2choice(){

},


}