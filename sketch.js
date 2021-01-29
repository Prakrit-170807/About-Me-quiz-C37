
var database;
var form , player , game
var GameMode=0
var Players = 0

function setup(){
  canvas = createCanvas(windowWidth-25,windowHeight-25);
  database = firebase.database();
  game=new g_status()
  game.getStates()
  game.START()
}


function draw(){
  background("#1D1D1D");
  if(Players==4){
    game.update(1)
  }
  if(GameMode==1){
    game.play()
  }
  
}
