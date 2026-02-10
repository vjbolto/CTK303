//let car0, car1, car2, car3, car4, car5, car6, car7, car8;
let x, y;
let cars = [];
let water = [];
let frogPos;
let state = 0;
let timer = 0;
let lives = 5;

let points;
let enemy;
let player;
let bg;
let bgS;
let bgW;
let bgL;
let song1, song2, song3, song4;

function preload(){
//   song1 = loadSound("assets/song1.mp4");
//   song2 = loadSound("assets/song2.mp4");
//   song3 = loadSound("assets/song3.m4a");
//   song4 = loadSound("assets/song4.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 5; i++) {
	cars.push(new Car());  // pushes onto an array called “cars”
	}
  for (let i = 0; i < 5; i++) {
	water.push(new Water());  // pushes onto an array called “cars”
	}
  
  frogPos = createVector(width/2, height-40);
  
  imageMode(CENTER);
  angleMode(DEGREES);
  
  bgL = loadImage("assets/232gamelose.png");
  bgW = loadImage("assets/Untitled-1.png");
  bg = loadImage("assets/232gamescreen.png");
  bgS = loadImage("assets/232gamestart.png");
  player = loadImage("assets/232realgamecharacter.png");
  enemy = loadImage("assets/232gameenemy.png");
  points = loadImage("assets/232gamepoint.png");
  

  
//   if(state == 2){
//      song3.play();
//      }
//   if(state == 3){
//      song1.play();
//      }
//   if(state == 1){
//      song2.play();
//      }
//   if(state == 0){
//      song4.play();
//      }
  
  // car0 = new Car();

}

function draw() {

switch (state) {
  case 0:
	image(bgS, width/2, height/2, width, height);
    fill("black");
    // if(!song4.isPlaying()){
    //   song1.stop();
    //   song2.stop();
    //   song3.stop();
    //  song4.play();
    //  }
    text("Welcome",100,100);
	break;
    
  case 1:
	game();
    // if(!song2.isPlaying()){
    //   song4.stop();
    //  song2.play();
    //  }
    //timer ++;
    // if (timer > 10*60){
    //   state = 2;
    // }
	break;
    
  case 2:
	image(bgL, width/2, height/2, width, height);
    fill("white");
    // if(!song3.isPlaying()){
    //   song2.stop();
    //  song3.play();
    //  }
    text("You are Loser",100,100);
	break;
    
  case 3:
    image(bgW, width/2, height/2, width, height);
    text("You are Win",100,100);
    // if(!song1.isPlaying()){
    //   song2.stop();
    //  song1.play();
    //  }
    break;
}
  // car0.display();
  // car0.move();

}

function reset(){
  timer = 0;
  cars = [];
  for (let i = 0; i < 5; i++) {
	cars.push(new Car());  // pushes onto an array called “cars”
	}
  water = [];
  for (let i = 0; i < 5; i++) {
	water.push(new Water());  // pushes onto an array called “cars”
	}
}


function mouseReleased() {
  switch(state){
    case 0:
      state = 1;
      break;
    case 2:
      state = 0;
      reset();
      break;
    case 3:
      state = 0;
      reset();
      break;
         }
}

function game(){
    
  image(bg, width/2, height/2, width, height);
  for(let i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].move();
    
    if(cars[i].pos.dist(frogPos) < 50){
      //print("bepp");
      cars.splice(i,1);
       }
  }
  for(let i = 0; i < water.length; i++){
  water[i].display();
  water[i].move();
    
    if(water[i].pos.dist(frogPos) < 50){
      //print("bepp");
      water.splice(i,1);
       }
  }
  
  // check to see if cars array is empty
  if(cars.length <= 0){
     state = 2;
     }
  if(water.length <= 0){
     state = 3;
     }
  
  // fill("green");
  // ellipse(frogPos.x, frogPos.y, 50, 50)
  
  image(player, frogPos.x, frogPos.y, 50, 50);
  
  checkForKeys();
}

function checkForKeys() {
  if(keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if(keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if(keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if(keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  // if(keyIsDown("a")) frogPos.x -= 5;
  // if(keyIsDown("w")) frogPos.y -= 5;
  // if(keyIsDown("d")) frogPos.x += 5;
  // if(keyIsDown("s")) frogPos.y += 5;
}


class Car {
  // The class's constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100, 255);
    this.size = random(12, 60);
    this.rot = random(360);
    this.rv = random(-5, 5);
  }
  
  move(){
    this.pos.add(this.vel);
    if(this.pos.x > width){
       this.pos.x = 0;
       }
    if(this.pos.x < 0){
       this.pos.x = width;
       }
    if(this.pos.y > height){
       this.pos.y = 0;
       }
    if(this.pos.y < 0){
       this.pos.y = height;
       }
  }

  // methods - these get called with a dot after the variable

  display() {
    push();
    // tint(this.r, this.g, this.b, 255);
    translate(this.pos.x, this.pos.y);
    // rotate(this.rot);
    // this.rot += this.rv;
      image(enemy, 0, 0, 50, 50);
pop();
    
//    fill(this.r,this.g,this.b, this.o);
//     rect(this.pos.x, this.pos.y, 50, 25);
//     ellipse(this.pos.x+10, this.pos.y+25, 15, 15)
//     ellipse(this.pos.x+40, this.pos.y+25, 15, 15)
    // textSize(this.size);
    // text("OOP", this.pos.x, this.pos.y);
  }
}

class Water {
  // The class's constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100, 255);
    this.size = random(12, 60);
    this.rot = random(360);
    this.rv = random(-5, 5);
  }
  
  move(){
    this.pos.add(this.vel);
    if(this.pos.x > width){
       this.pos.x = 0;
       }
    if(this.pos.x < 0){
       this.pos.x = width;
       }
    if(this.pos.y > height){
       this.pos.y = 0;
       }
    if(this.pos.y < 0){
       this.pos.y = height;
       }
  }

  // methods - these get called with a dot after the variable

  display() {
    push();
    // tint(this.r, this.g, this.b, 255);
    translate(this.pos.x, this.pos.y);
    // rotate(this.rot);
    // this.rot += this.rv;
      image(points, 0, 0, 50, 50);
pop();
    
//    fill(this.r,this.g,this.b, this.o);
//     rect(this.pos.x, this.pos.y, 50, 25);
//     ellipse(this.pos.x+10, this.pos.y+25, 15, 15)
//     ellipse(this.pos.x+40, this.pos.y+25, 15, 15)
    // textSize(this.size);
    // text("OOP", this.pos.x, this.pos.y);
  }
}

