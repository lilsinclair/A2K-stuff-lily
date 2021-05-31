/* Interactive simple Font displayer with sound by karen ann donnachie
 * REQUIRES SOUND LIBRARY *
 * Mouse click and keyType can display one letter at a time.
 * Tone (sound) is played by setting midi note to unicode char number
 * Space bar will save current glyph as jpg
 * Set firstLetter as an integer of first usable glyph in font
 * Set lastLetter as last usable glyph in font
 * If you have 'empty' glyphs, you may need to set math to skip or make a list of 'allowed' keys
 */
let font, rand, counter, letter,cnv, polysynth, osc, env, listLength;
let firstLetter=33; //the first coded glyph (as unicode number)
let lastLetter=125; //the last coded glyph (as unicode number)
let fontsize ;
const letters='!@#$%&*()_=><?/}{\1234567890abcdefghijklmnopqrstuvwxyz;:",.\'';

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('data/SourceSansPro-Regular.otf');
  font = loadFont('data/playschool.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255,0,0);
  counter=firstLetter;
  fontsize=height*0.75;
  letter = char(counter);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  osc = new p5.TriOsc();
  env = new p5.Envelope();
  listLength = letters.length;
}

function draw() {
  background(255,200,200);
    // Draw the letter to the screen
    text(letter, width/2, height/2);

push();
textSize(width/20);
fill(100,100,250);
text('type a key', width-width/6, height-height/6);

pop();

push();
   fill(mouseX/3,mouseY/2,200);
   textSize(50);
   text('<',mouseX, mouseY);
   text('=',pmouseX,pmouseY);
   //text('>',pmouseX,pmouseY);//I want this glyph to follow third
   frameRate(15);
pop();

}
//LETTER SPRINKLES
//function mousePressed() {  
//push();
//rand = int(random(0,listLength-1));
//textSize(72);
//text(letters[rand], random(width), random(height));
//fill(random(windowWidth)/3,random(windowHeight)/2,200);
//pop();
//}

function keyTyped(){
  if (key == ' '){
  saveCanvas(letter, 'jpg');}// pressing space bar will save current glyph as a jpg
 
  userStartAudio();
  letter = unchar(key);
  osc.start();
  freq = midiToFreq(letter-30); //the math here adjusts the scale -30 (lowers frequency of sound)
  osc.freq(freq);
  env.ramp(osc, 0, 1.0, 0);
  
  if (key == ' '){
  saveCanvas(letter, 'jpg');
  }
  letter=key;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  fontsize=height*0.75;
  // Set text characteristics
  textSize(fontsize);
}
