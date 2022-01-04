class paddle{

    constructor(int){

        this.top;

        this.length = 100;
        this.width = 10;

        this.player = int;

        this.setup();

    }

    setup(){

        if (this.player == 1){

            this.top = createVector(20, 300);

        }else{

            this.top = createVector(1470, 300);

        }

    }

    render(){

        noStroke();
        fill(255);

        rect(this.top.x, this.top.y, this.width, this.length);

    }

    up(){

        if (this.top.y > 0){

            this.top.y -= 2;

        }

    }
    
    down(){

        if ((this.top.y + this.length) < 700){

            this.top.y += 2;

        }

    }

    reset(){

        this.length = 100;
        this.width = 10;

        this.setup();

    }

}