function hitCheck(){

    if (ball1.location.x + ball1.xVelocity <= 20){  //if ball on or past p1 in its next position  
  
      if (ball1.location.x > 20){ //if ball is currently in front of p1
  
        if (pad1.top.y <= ball1.location.y){ //if ball is beneath or perpendicular to top of p1
  
          if (pad1.top.y + pad1.length >= ball1.location.y){  //if ball is above or perpendicular to bottom of p1
    
            ball1.move(); //move the ball to its next position
            ball1.xVelocity * -1; //changes direction of motion of the ball
    
          }
    
        }
  
      }
  
    }else{
  
      if (ball1.location.x + ball1.xVelocity >= 1470){  //if ball on or past p2 in its next position
  
        console.log("1");
  
        if (ball1.location.x < 1470){ //if ball is currently in front of p2
  
          console.log("2");
  
          if (ball1.location.y >= pad2.top.y){  //if ball is beneath or perpendicular to top of p2
  
            console.log("3");
  
            if (ball1.location.y <= pad2.top.y + pad2.length){  //if ball is above or perpendicular to bottom of p2
  
              console.log("4");
  
              ball1.move();   //move the ball to its next position
              ball1.xVelocity * -1; //change direction of motion of the ball
  
            }
  
          }
  
        }
  
      }else{
  
        if (ball1.location.x + ball1.xVelocity <= 0){ //if ball will be at or past the start of the canvas in its next position
  
          if (ball1.location.x > 0){  //if the ball is currently on the canvas
  
            ball1.move(); //move the ball to its next position
            //need to execute the function for scoring a point here once ive written it.
  
          }
  
        }else{
  
          if (ball1.location.x + ball1.xVelocity >= 1500){  //if ball will be at or past end of canvas in its next position
  
            if (ball1.location.x < 1500){ //if ball is currently on the canvas
  
              ball1.move(); //move the ball to its next position
              //need to execute the function for scoring a point here once ive written it.
  
            }
  
          }else{  //nothing special about ball position
  
            ball1.move(); //move the ball to its next position
  
          }
  
        }
  
      }
  
    }
  
  }
  