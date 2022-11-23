# air-paint-ml5

## Description

This project is made using ml5js library which is a javascript machine learning library and p5js(for creative coding). It uses the Handpose model. Handpose is a machine-learning model that allows for palm detection and hand-skeleton finger tracking in the browser. It can detect a maximum of one hand at a time and provides 21 3D hand keypoints that describe important locations on the palm and fingers.

Here I have used 8th parameter out of the 21 keypoints which denotes the tip of the index finger.
```js
const keypoint = prediction.landmarks[8];
```


The neon effect is done by first drawing a wider curve of reduced alpha and then drawing a narrower curve of full alpha.
```js
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
```



## Demo
<img src="https://user-images.githubusercontent.com/34862954/203579247-e55019e8-fa2a-42d6-9e39-73d9d7115a1b.png" width="500" />

## Further improvements
The same project can be implemented in mediapipeJS for lower latency and accurate results.


