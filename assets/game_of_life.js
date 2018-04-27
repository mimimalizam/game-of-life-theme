var w, columns, rows;
var insert_mode, clear_mode, easter_egg, pause_mode;
var counter, frequence, touch_count;
let board, next;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 8;
  easter_egg = 0;
  counter = 0; frequence = 50; touch_count = 0;
  insert_mode = 0; clear_mode = 0; pause_mode = 0;
  columns = floor(width/w);
  rows = floor(height/w);

  randomize_colors();
  board = new Board(columns, rows);
  board.fill(0, columns, 0, 3);
  next = new Board(columns, rows);
  next.empty();

  background(253, 253, 253);
  draw_board();
}

function draw() {
  if (counter % frequence === 0 && easter_egg === 1){
    background(253, 253, 253);
    draw_board();
    generate();
  }
  counter += 1;
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
  if (pause_mode != 1) {
    var temp = board;
    board = Board.generate_next(board);
    next = temp;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  if (insert_mode == 1) {
    var tmpX = floor(mouseX/w);
    var tmpY = floor( mouseY/w);

    board.fill(tmpX - 4, tmpX + 4, tmpY - 4, tmpY + 4);
  }
  return false;
}

function mousePressed() {
  if (insert_mode == 1) {
    var tmpX = floor(mouseX/w);
    var tmpY = floor( mouseY/w);

    board.fill(tmpX - 3, tmpX + 3, tmpY - 3, tmpY + 3);
  };

  return false;
}

function keyTyped(){
  if (key ==='e') {
    frequence = 50;
    easter_egg = 1;
    randomize_colors();
    board.empty();
    board.fill(0, columns, rows - 30, rows);
  }
  else if (key === 'q') {
    hide_game_of_life();
    clear_mode = 1;
    insert_mode = 0;
  }
  else if (key === 'k') {
    insert_mode = 0;
    frequence = max(5, frequence - 5);
  }
  else if (key === 'j') {
    insert_mode = 0;
    frequence += 5;
  }
  else if (key === 's') {
    pause_mode = 0;
  }
  else if (key === 'p') {
    pause_mode = 1;
  }
  else if (key === 'i'){
    if (clear_mode == 1) insert_mode = 0;
    else {
      clear_mode = 0;
      insert_mode = 1;
    };
  } else randomize_colors();

  return false;
}

function touchStarted() {
  touch_count += 1;
  if (touch_count % 2 === 0){
    pause_mode = 1;
  }
  else {
    pause_mode = 0;
    frequence = 50;
    easter_egg = 1;
    randomize_colors();
    board.empty();
    board.fill(0, columns, rows - 30, rows);
  }
  return false;
}

function touchMoved() {
  return false;
}

function randomize_colors(){
  clear_mode = 0;
  r = random(255);
  g = random(255);
  b = random(255);
}

function hide_game_of_life(){
  clear_mode = 1;
  r = 253;
  g = 253;
  b = 255;
}
