let pad1;     //declares paddle object for each player
let pad2;
let ball1;     //declares the ball object to play with
let pow;      //declares a power

let p1Score = 0; //score of player 1
let p2Score = 0; //score of player 2

let lastHit = 0;

function setup() {  
  createCanvas(1500, 700);

  pad1 = new paddle(1); //creates paddles
  pad2 = new paddle(2);

  ball1 = new ball();  //creates ball

  pow = new power();

}

function draw() {
  background(0);


  p1Move(); //moves paddles appropriately
  p2Move(); 

  pad1.render();  //draws paddles in current position
  pad2.render();


  hitCheck();
  verticalCheck();

  ball1.render(); //draws the ball

  fill(255);

  text('p1 - ' + p1Score, 100, 100);
  text('p2 - ' + p2Score, 1400, 100);

  powerFunc();

}

function p1Move(){

  //movement for player 1 paddle

  if (keyIsDown(87)){ //If pressing w

    pad1.up();  //move the paddle upwards (runs the up function in paddle.js)

  }else{

    if (keyIsDown(83)){ //if pressing s

      pad1.down();  //move the paddle downwards (runs the down funtion in paddle.js)

    }

  }

}

function p2Move(){

  //movement for player 2 paddle

  if (keyIsDown(UP_ARROW)){ //if pressing up

    pad2.up();  //move paddle up (runs the up function in paddle.js)

  }else{

    if (keyIsDown(DOWN_ARROW)){ //if pressing down

      pad2.down(); //move paddle down (runs the down function in paddle.js)

    }

  }

}

function hitCheck(){

  if ((ball1.location.x + ball1.xVelocity <= 20) && (ball1.location.x >= 20) && (ball1.location.y >= pad1.top.y) && (ball1.location.y <= pad1.top.y + pad1.length)){ //if ball is infront of paddle1 now and will be behind paddle in next position and is inline with paddle

    ball1.move();                    //move the ball to its next position
    ball1.xVelocity *= -1.1;           //change the direction of motion of the ball
    changeY(1);
    lastHit = 1;    //saves that player 1 was the last player to hit the ball

    pow.count += 1;

  }else if ((ball1.location.x + ball1.xVelocity >= 1470) && (ball1.location.x <= 1470) && (ball1.location.y >= pad2.top.y) && (ball1.location.y <= pad2.top.y + pad2.length)){ //if ball is infront of paddle2 now and will be behind paddle in next position and is inline with paddle 

    ball1.move();                    //move the ball to its next position
    ball1.xVelocity *= -1.1;           //change the direction of motion of the ball
    changeY(2);
    lastHit = 2;  //saves that player 2 was the last player to hit the ball

    pow.count += 1;

  }else if ((ball1.location.x + ball1.xVelocity <= 0) && (ball1.location.x >= 0)){  //if ball is currently on canvas and will be off the canvas in its next position by moving past p1

    score(2); //player 2 scores a point

  }else if((ball1.location.x + ball1.xVelocity >= 1500) && (ball1.location.x <= 1500)){ //if ball is currently on canvas and will be off the canvas in its next position by moving past p2

    score(1); //player 1 scores a point

  }else{ //if no special case

    ball1.move(); //move ball to its next position

  }

}

function verticalCheck(){

  if ((ball1.location.y + ball1.yVelocity <= 0) && (ball1.location.y >= 0)){

    ball1.yVelocity *= -1;

  }else if((ball1.location.y + ball1.yVelocity >= 700) && (ball1.location.y <= 700)){

    ball1.yVelocity *= -1;

  }

}

function changeY(int){

  if (int == 1){

    if (ball1.location.y > pad1.top.y + (pad1.length/2)){

      ball1.yVelocity += (pad1.length - ((pad1.top.y + pad1.length) - ball1.location.y))/100;

    }else if (ball1.location.y < pad1.top.y + (pad1.length/2)){

      ball1.yVelocity -= ((pad1.top.y + pad1.length) - ball1.location.y)/100;

    }else{

      ball1.yVelocity += 0;

    }

  }else{

    if (ball1.location.y > pad2.top.y + (pad2.length/2)){

      ball1.yVelocity += (pad2.length - ((pad2.top.y + pad2.length) - ball1.location.y))/100;

    }else if (ball1.location.y < pad2.top.y + (pad2.length/2)){

      ball1.yVelocity -= ((pad2.top.y + pad2.length) - ball1.location.y)/100;

    }else{

      ball1.yVelocity += 0;

    }

  }

}

function score(int){

  if (int == 1){

    p1Score++
    ball1.reset();
    pad1.reset();
    pad2.reset();

  }else{

    p2Score++
    ball1.reset();
    pad1.reset();
    pad2.reset();

  }

  lastHit = 0;

}

function powerFunc(){

  if (pow.count == 5){

    pad1.length = 100;
    pad2.length = 100;

    pow.active = false;

  }

  if (pow.onCanvas == false && pow.active == false){ //if no powerup is on the canvas

    let testInt = Math.random() * 1000  //random chance for powerupt to spawn

    if (testInt > 10){

      pow.onCanvas = true;  //tell the code there is a power on the canvas

      pow.random(); //create a random power

    }

  }else if ((ball1.location.x >= pow.location.x) && (ball1.location.x <= (pow.location.x + 50)) && (ball1.location.y >= pow.location.y) && (ball1.location.y <= pow.location.y + 50) && (pow.onCanvas == true) && (pow.active == false) && (lastHit != 0)){  //if player hits powerup

    collectPower();

  }else if (pow.onCanvas == true && pow.active == false){  //power on canvas but player hasnt hit it

    stroke(255);
    strokeWeight(5);
    fill(0);

    square(pow.location.x, pow.location.y, 50);

  }

}

function collectPower(){

  if (lastHit == 1){  //run funtion for player 1

    let type = Math.random()

    if (type < 0.5){

      pad1.length = 200;

    }else{

      pad2.length = 50;

    }

  }else if (lastHit == 2){  //run function for player 2

    let type = Math.random();
    
    if (type < 0.5){

      pad2.length = 200;

    }else{

      pad1.length = 50;

    }

  }

  pow.onCanvas = false;
  pow.active = true;

}


