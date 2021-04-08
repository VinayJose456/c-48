class obstacle{
    constructor(){
        this.r=5;
        this.resetObstacle();
    }
    resetObstacle(){
        this.y=random(height-70);
        var spawnLeftSide=random(1)<0.5;
        if(spawnLeftSide){
            this.x=random(-width,0);
            this.isGoingLeft=false;
        }
        else{
            this.x=random(width,width*2);
            this.isGoingLeft=true;
        }
    }
    update(){
        if(this.isGoingLeft){
            this.x--;
        }
        else{
            this.x++;
        }
        if(this.isOffScreen()){
            this.resetObstacle();

        }
    }
    isOffScreen(){
        if(this.isGoingLeft && this.x<-5){
            return true;
        }
        else if(!this.IsGoingLeft && this.x>width+5){
            return true;
        }
        return false;
    }
    display(){
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    obstacleHitWagon(wagon){
        if(dist(this.x,this.y,wagon.x,wagon.y)<this.r+wagon.r){
            return true;
        }
        return false;
    }
}