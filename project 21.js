var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(500,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(300,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
   ball.velocityX = 4;
   ball.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        music.play();
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x -  object1.x < object2.width/2 +  object1.width/2
        &&  object1.y - object2.y < object2.height/2 +  object1.height/2
        && object2.y -  object1.y < object2.height/2 +  object1.height/2) {
     return true;
    }
    else {
      return false;
    }}

function bounceOff(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x -  object1.x < object2.width/2 +  object1.width/2){
           object1.veliocityX =  object1.veliocityX * -1;
           object2.velocityX =  object2.veliocityX * -1;
        }
}   if( object1.y - object2.y < object2.height/2 +  object1.height/2
    && object2.y -  object1.y < object2.height/2 +  object1.height/2){
        object1.veliocityY =  object1.veliocityX * -1;
        object2.velocityY =  object2.veliocityX * -1;
    }