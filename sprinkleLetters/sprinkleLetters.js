var font, rand, listLength;
const letters='!@#$%&*()_=><?/}{\1234567890abcdefghijklmnopqrstuvwxyz;:",.\'';

function preload(){
font= loadFont('data/playschool.otf');

}
function setup() {
createCanvas(windowWidth,windowHeight);
background(255);
textSize(72);
textFont(font);
textAlign(CENTER,CENTER);
listLength = letters.length ;
}


function draw() {
}

function mousePressed(){
rand = int(random(0,listLength-1));
text(letters[rand], random(width), random(height));
fill(random(windowWidth)/3,random(windowHeight)/2,200);

}
