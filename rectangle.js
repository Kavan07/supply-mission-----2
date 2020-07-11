class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //this.image = loadImage("");
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.,
        isStatic : true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
    fill(255);
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    //imageMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}