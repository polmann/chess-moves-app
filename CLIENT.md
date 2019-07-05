# Client

This app shows all the possible moves of a Knight in two turns.

## Step by Step

Here is a breakdown of the steps to highlight the Knight's possible moves.

### 1. Empty Board

We start with a clean board:

![project structure](/public/images/step1.png)


### 2. Select a Tile

Firstly, we will select where the Knight starts by clicking/tapping on any board tile. When selected, the tile will be highlighted. You can only select one tile at a time:

![project structure](/public/images/step2.png)


### 3. Show Moves

After selecting a tile, you can fetch the possible moves by clicking/tapping the "Show moves" button at the bottom of the screen.

This will trigger a call to the API, that will return all possible moves in two turns, and then the application will highlight all positions on the board:

![project structure](/public/images/step3.png)


### 4. Repeat

If you wish to choose a different tile, you can do so at any time. When selecting a new tile, all highlighted positions disappear and the application is ready for another round.


## Questions

If you have any questions feel free to get in touch. In case you find any issues, please open one at the Issues tab above.
