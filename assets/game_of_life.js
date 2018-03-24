var w;
var columns;
var rows;
let board, next;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 7;
  columns = floor(width/w);
  rows = floor(height/w);

  randomize_colors();
  board = new Board(columns, rows);
  board.fill(0, columns, 0, 30);
  next = new Board(columns, rows);
  next.empty();
}

function draw() {
  background(253, 253, 253);
  generate();
  draw_board();
}

function draw_board(){
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((board.cells[i][j] == 1)) fill(r, g, b);
      else fill(253, 253, 255);
      stroke(253, 253, 255);
      rect(i*w, j*w, w-1, w-1);
    }
  }
}

function generate(){
  var temp = board;
  board = Board.generate_next(board);
  next = temp;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    randomize_colors();
}

function keyPressed(){
  board.fill(0, columns, 0, 30);
}

function keyPressed(){
  if (keyCode === ESCAPE){
    hide_game_of_life();
  };
}

function randomize_colors(){
  r = random(255);
  g = random(255);
  b = random(255);
}

function hide_game_of_life(){
  r = 253;
  g = 253;
  b = 255;
}
