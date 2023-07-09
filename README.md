# Tic Tac Toe game in React
This is a simple Tic Tac Toe game built with React. It was created as a learning exercise while going through the React documentation. The game also includes some CSS styling to make it more visually appealing.

# How to play
To play the game, simply click on a square on the board to make a move. The first player is X and the second player is O. The goal is to get three in a row, either horizontally, vertically, or diagonally. If neither player gets three in a row and the board is full, the game ends in a draw.

# Running the game
To run the game on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and go to `http://localhost:3000` to play the game.
   
# How the game was built
The game was built using React, a popular JavaScript library for building user interfaces. The Square, Board, and Game components were created to represent the different parts of the game. The calculateWinner function was used to determine if a player had won the game. The useState hook was used to manage the game state and update the board when the player made a move.

# Styling the game
The game was styled using CSS to make it more visually appealing. The :root selector was used to define some color variables that were used throughout the game. The game board and squares were given borders and padding to make them stand out. The winning squares were highlighted with a different color. The game status and move list were styled to make them easy to read and navigate.

# Conclusion
This Tic Tac Toe game is a simple example of how React can be used to build user interfaces. By following along with the React documentation and implementing some CSS styling, you can create your own games and applications in React.
