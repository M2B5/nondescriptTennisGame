class ball{

    constructor(){

        this.xVelocity = 3;
        this.yVelocity = 0;

        this.location;

        this.hits = 0;

        this.diameter = 16;

        this.setup();

    }

    setup(){

        this.location = createVector(750, 350);

    }

    move(){

        this.location.x += this.xVelocity;
        this.location.y += this.yVelocity;
        

    }

    render(){

        noStroke();
        fill(255);
        ellipse(this.location.x, this.location.y, this.diameter, this.diameter);

    }

    reset(){

        this.xVelocity = 3;
        this.yVelocity = 0;

        this.diameter = 16;

        this.setup();

    }


}