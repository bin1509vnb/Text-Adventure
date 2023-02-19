let value = 255;
function draw() {
  fill(value);
  rect(10, 10, 10, 10);
}
function keyPressed() {
  if (keyCode === ENTER) {
    value = 0;
  } else if (keyCode === ESCAPE) {
    value = 255;
  }
}

