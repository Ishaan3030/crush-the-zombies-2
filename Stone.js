class Stone
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic: false
    };
    
    this.body = Bodies.circle(x, y, w, options);
    this.w = w;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.w);
    pop();
  }
}