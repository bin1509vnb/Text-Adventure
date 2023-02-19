// let colorPicker;
// function setup() {
//   colorPicker = createColorPicker('#ed225d');
//   colorPicker.position(700, 200);
//   colorPicker.size(100,100)
// }

let capture;

function setup() {
  createCanvas(100, 100);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
}