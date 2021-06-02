/* Interactive simple Font displayer with sound by karen ann donnachie
 * REQUIRES SOUND LIBRARY *
 * keyType can display one letter at a time.
 * Tone (sound) is played by setting midi note to unicode char number
 * Space bar will save current glyph as jpg
 * Set firstLetter as an integer of first usable glyph in font
 * Set lastLetter as last usable glyph in font
 */
 
let font1, font2, rand, counter, letter,cnv, polysynth, osc, env;
let firstLetter=33; //the first coded glyph (as unicode number)
let lastLetter=125; //the last coded glyph (as unicode number)
let fontsize ;


function preload() {
 font1 = loadFont('data/playschool.otf');
 font2 = loadFont('data/playschool_abcdario.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  fill(255,0,0);
  counter=firstLetter;
  fontsize=height*0.75;
  letter = char(counter);
  // Set text characteristics
  textFont(font1);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  osc = new p5.TriOsc();
  env = new p5.Envelope();
}

function draw() {
  background(255,200,200);
    // Draw the letter to the screen
    text(letter, width/2, height/2);
    
//I TRIED SO MANY THINGS HERE BUT I DON'T KNOW WHAT TO DO
//THIS IS TO DISPLAY FONT 1 (REGULAR LETTERS) THEN AFTER A DELAY DISPLAY FONT 2 (ABCDARIO)
//if (textFont()==font1){
//textFont(font2).delay(10);
//}


push();//instructional text
textSize(width/20);
textFont(font1);
fill(100,100,250);
text('type a key', width-width/6, height-height/6);
pop();

push();
   fill(mouseX/3,mouseY/2,200);//pastel rainbow to mouse movement
   textSize(50);
   text('<',mouseX, mouseY);
   text('=',pmouseX,pmouseY);
   //text('>',pmouseX,pmouseY);//I want this glyph to follow third
   frameRate(15);//to slow down movement of text to make both charcters visible/give glitchy look
pop();
}

function keyTyped(){
  //if (key == DOWN_ARROW){
  //saveCanvas(letter, 'jpg');}// pressing space bar will save current glyph as a jpg
 
  userStartAudio();
  letter = unchar(key);
  osc.start();
  freq = midiToFreq(letter-30); //the math here adjusts the scale -30 (lowers frequency of sound)
  osc.freq(freq);
  env.ramp(osc, 0, 1.0, 0);
  
  //if (key == DOWN_ARROW){
  //saveCanvas(letter, 'jpg');
  //}
  letter=key;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  fontsize=height*0.75;
  // Set text characteristics
  textSize(fontsize);
}
