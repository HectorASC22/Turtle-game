//declared vaiables:

//states: state 1(starting menu) -- state2(actual game) -- state3(end screen as fail)
let state = 2;


let myXPos = 100;
let myYPos = 100;
let wormXPos = 50;
let wormYPos = 50;

let turtleImage;


let myLeft, myRight, myTop, myBottom;

 




// Step 1. Create pond
function setup() {
    createCanvas(500, 500);

    /*
    createCanvas(500, 500);
    background(52, 161, 235);
    */
// Step 2. Create turtle artwork

   
}
// Step 3. Create user inputs for Turtle input


 

   noStroke();
 
   // rectMode(CENTER);

 
function draw() {

    if (state == 2) {
        background(52, 161, 235);
        rectMode(CENTER);
       
        fill(138, 98, 14);
        rect(250, 340, 150, 60);




        fill(138, 98, 14);
        rect(250, 340, 150, 60);

        textSize(22);
        fill(101, 219, 112);
        text("PLAY GAME", 185, 350);
    }







if (state == 1) {
    
   background(52, 161, 235);

   
 
   fill(255, 122, 226);
  rect(myXPos, myYPos, 50, 50);
   
   fill(2, 105, 50);
   rect()
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }
    myXPos -=6
   
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }
   myXPos += 6
   if (keyIsDown(UP_ARROW)) {
     
    myYPos -= 3;
   }
   myYPos -= 6
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }
   myYPos += 6
    }
}
// Step 4. Make a system for random worm spawn points
let worm; 
// Step 5. Create collisions for worm and turtle
    //turtle boundaries
    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos +25;

    //worm boundaries
    
























