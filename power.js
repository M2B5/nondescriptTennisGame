class power{

    constructor(){

        this.powerID;

        this.location = createVector();

        this.duration;
        this.count = 0;

        this.show = false;
        this.onCanvas = false;

        this.active = false;

    }

    random(){

        this.duration = Math.floor(Math.random() * 3) + 2;

        this.location.y = Math.floor(Math.random() * 500) + 100;
        this.location.x = Math.floor(Math.random() * 1100) + 200;

        this.count = 0;

    }

    getDuration(){

        return this.duration;

    }

    getLocationX(){

        return this.location.x;

    }

    getLocationY(){

        return this.location.y;

    }

}