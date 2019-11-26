// Classification with Machine Learning
// Can Machine learning and AI make us safer?
// By Idorenyin Eno


// Video - Create a variable for Video
var video;
// Label - Create a variable for Label
var label = ''
var sLabel = ''
// Classifier - Create variable for Classifier
var theClassifier;


// Use P5s preoload function to call ML5s image classifier against a neural network
function preload() {
  theClassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2zapyKin/' + 'model.json');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  classifyTheVideo(); // Classify data
}

// Classify video input
function classifyTheVideo() {
  theClassifier.classify(video, giveData);
}

function draw() {
  background(255);

  image(video, 0, 0); // Draw video on canvas

  // Create label on canvas
  textSize(28);
  fill(255);
  textAlign(CENTER, CENTER);
  text(label, 300, height / 3);
  text(sLabel, width / 2, height / 2);
  //createP(sLabel)
}

// Present data
function giveData(error, results) {
  if (error) {
    console.log(error);
    return;
  }
  label = results[0].label;
  sLabel = results[0].confidence;
  classifyTheVideo();
  //console.log(results);

}