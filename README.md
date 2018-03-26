# Jekyll theme `game-of-life`

Short description and a ToDos (update README)

### Usage

Lines similar to the following will plot a Game of life strip

```js
board = new Board(columns, rows);
board.fill(starting_column, ending_column, starting_row, ending_row);
```

### Functionality

This theme is breaking the rule and visitor can interact with the Game after
it has started. However, nice people are still able to observe how initial
game evolves.

- if your eyes are a bit tired and you'd prefer to quietly read a page, type `q`
- type `i` to start the Insert Mode where you can create new cells
  - with a click of a mouse new cells will be randomily created around
  - if you are feeling happy, drag mouse to create some more
- press `ESC` to --- escape the Insert Mode
- press `e` to restart the Game
- to change the cells' color press any additional key

ToDo:

Show mode and commands in the UI
