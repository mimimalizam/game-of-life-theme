# game-of-life a Jekyll theme

### Customizing the theme

Among other personal details, font and background color could be changed
by updating the `_config.yml` file.

#### Change the Game of life strip

Lines similar to the following will plot a Game of life strip

```js
board = new Board(columns, rows);
board.fill(starting_column, ending_column, starting_row, ending_row);
```

### Functionality

This theme is breaking the rule
and visitor can interact with an ongoing Game.

However, nice people are still able to observe how initial
game evolves.

- press `e` to start and/or restart the Game
- if your eyes are a bit tired and you'd prefer to quietly read a page you can
  - type `q` to erase cells from the screen
  - type `p` to pause the Game (use `s` to resume the Game)
- type `i` to start the Insert Mode where you can create new cells
  - with a click of a mouse new cells will be randomily created around
  - if you are feeling happy, drag mouse to create some more
- press `ESC` to --- escape the Insert Mode
- use `j` and `k` to control the speed
- to change the cells' color press any additional key
