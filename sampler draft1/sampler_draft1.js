var font1, rand;
const letters= '-+=';
var listLength ;




function preload(){
font1=loadFont('data/TBCfont.otf');

}

function setup() {
 createCanvas(windowWidth, windowHeight);
background(252,200,200,12);
textSize(50);
textFont(font1);
textAlign(CENTER,CENTER);
listLength = letters.length ;

}

function draw() {
  //rand = int(random(0,listLength));
  background(255,200,200);//opacity 35
  push();
   fill(mouseX/3,mouseY/2,200);
   text('+',mouseX, mouseY);
   text('-',pmouseX,pmouseY);
   //text('=',pmouseX,pmouseY);
  pop();
frameRate(15);

}


function keyPressed(){
 {   if (key===' '){     
 background(252,200,200);   }
  } 
}
