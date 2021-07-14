var bg;
var gameState;
var database;
var fun=0; 
var start;
var start1;
var form;

function preload() {
 
  start = loadImage("images/start.png");
  bg= loadImage("images/gameback.jpg")
 
}

function setup() {
  createCanvas(1000,500);
  database = firebase.database();

  gameState=database.ref('gameState');
  gameState.on("value",function(data){
    fun=data.val();
  });

  form = new Form();
  
}

function draw() {
  background(bg);

 console.log(fun);
  drawSprites()
}

