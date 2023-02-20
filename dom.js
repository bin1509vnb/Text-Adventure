// let colorPicker;
// function setup() {
//   colorPicker = createColorPicker('#ed225d');
//   colorPicker.position(700, 200);
//   colorPicker.size(100,100)
// }

let record;

function setup() {
  createCanvas(100, 100);
  record = createCapture(VIDEO);
  record.hide();
}

function draw() {
  image(capture, 0, 0, width, width * record.height / record.width);
  filter(INVERT);
}