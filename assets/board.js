class Board {
  constructor(TempWidth, TempHeight){
    this.rows = TempHeight;
    this.columns = TempWidth;

    this.empty();
  }

  empty() {
    this.cells = new Array(this.columns);
    for (var i = 0; i < this.columns; i++) {
      this.cells[i] = new Array(this.rows);
    };

    this.cells = Array(this.columns).fill().map(
      () => Array(this.rows).fill(0));
  }

  fill(columns_start, columns_end, rows_start, rows_end) {
    for (var x = columns_start; x < columns_end; x++) {
      for (var y = rows_start; y < rows_end; y++) {
        this.cells[x][y] = floor(random(2));
      }
    }
  }

  static generate_next(board) {
    var nextVar = new Board(board.columns, board.rows);

    for (var x = 1; x < board.columns - 1; x++) {
      for (var y = 1; y < board.rows - 1; y++) {
        var neighbors = 0;

        for (var i = -1; i <= 1; i++) {
          for (var j = -1; j <= 1; j++) {
            neighbors += board.cells[x+i][y+j];
          }
        }

        neighbors -= board.cells[x][y];
        if      ((board.cells[x][y] == 1) && (neighbors <  2)) nextVar.cells[x][y] = 0;              // Loneliness
        else if ((board.cells[x][y] == 1) && (neighbors >  3)) nextVar.cells[x][y] = 0;              // Overpopulation
        else if ((board.cells[x][y] == 0) && (neighbors == 3)) nextVar.cells[x][y] = 1;              // Reproduction
        else                                             nextVar.cells[x][y] = board.cells[x][y]; // Stasis
      }
    }
    return(nextVar);
  }
}
