var font, fontSize, rand, testText;


function preload(){
font=loadFont('data/playschool.otf');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(252,200,200);
 textSize(50);
 textFont(font);
 textAlign(CENTER,CENTER);
//listLength = letters.length ;
fill(250,0,0);
noStroke();
textFont(font);
fontSize=(height/2);
testText="{hiya}";
}

function draw() {
  background(255,200,200);
textSize(fontSize);
text(testText, width/2, height/2);


push();
   fill(mouseX/3,mouseY/2,200);
   textSize(50);
   text('<',mouseX, mouseY);
   text('=',pmouseX,pmouseY);
   //text('>',pmouseX,pmouseY);//I want this glyph to follow third
   frameRate(15);
pop();
}

function keyTyped() {
testText=key;
background(255,200,200);
}


function keyPressed(){
 {   if (key===' '){     
 background(252,200,200);   }
  } 
}
