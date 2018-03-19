var w;
var columns;
var rows;
var board;
var next;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 7;
  columns = floor(width/w);
  rows = floor(height/w);

  board = create_board();
  next = create_board();
  randomize_color();
  init();
}

function create_board(){
  var boardVar;
  boardVar = new Array(columns);
  for (var i = 0; i < columns; i++) {
    boardVar[i] = new Array(rows);
  }
  return(boardVar);
}

function randomize_color(){
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(253, 253, 253);
  generate();
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) fill(r, g, b);
      else fill(253, 253, 255);
      stroke(253, 253, 255);
      rect(i*w, j*w, w-1, w-1);
    }
  }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  randomize_color();
}

function keyPressed(){
  randomize_color();
  init();
}

function mouseDragged(){
  i = floor(mouseX/w);
  j = floor(mouseY/w);
  next[i][j] = 1;
}

function init() {
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

function generate() {
  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      neighbors -= board[x][y];
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  var temp = board;
  board = next;
  next = temp;
}
