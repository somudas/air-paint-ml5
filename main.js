let handpose;
let video;
let predictions = [];
let trail = []
let MAXLEN = 100000;

function setup() {
  createCanvas(640, 480, WEBGL);

  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  handpose.on("predict", results => {
    predictions = results;
  });
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  scale(-1,1);
  translate(-width/2, -height/2);
  image(video, 0, 0, width, height);

  storeKeypoints();
  
  if(trail.length> MAXLEN) trail.shift();
  
  noFill();
  stroke(255,155,255,100);
  strokeWeight(15);
  beginShape();
  for(let i = 0;i<trail.length;i++){
    curveVertex(trail[i][0], trail[i][1]);
  }
  endShape();
  
  stroke(255,100,255);
  strokeWeight(5);
  beginShape();
  for(let i = 0;i<trail.length;i++){
    curveVertex(trail[i][0], trail[i][1]);
  }
  endShape();
}

function storeKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    const keypoint = prediction.landmarks[8];
    if(trail.length == 0){
      trail.push([keypoint[0], keypoint[1]]);
      continue;
    }
    let a = trail[trail.length-1];
    
    if(dist(a[0], a[1], keypoint[0], keypoint[1]) > 20)
      trail.push([keypoint[0], keypoint[1]]);
    
  }
}
