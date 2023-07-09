import React, { useState } from 'react';

function Square({ value, onClick, isWinningSquare }) {
  return (
    <button className={`square ${isWinningSquare ? 'winning' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

function Board({ squares, onClick, winningSquares }) {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinningSquare={winningSquares && winningSquares.includes(i)}
        key={i}
      />
    );
  };

  const boardRows = [];
  for (let i = 0; i < 3; i++) {
    const boardRow = [];
    for (let j = 0; j < 3; j++) {
      boardRow.push(renderSquare(i * 3 + j));
    }
    boardRows.push(<div className="board-row" key={i}>{boardRow}</div>);
  }

  return <div>{boardRows}</div>;
}

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), move: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sortAscending, setSortAscending] = useState(true);

  const current = history[currentMove];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner.winner;
  } else if (current.squares.every(Boolean)) {
    status = 'Draw!';
  } else {
    status = 'Next player: ' + (currentMove % 2 === 0 ? 'X' : 'O');
  }

  const moves = history.map(({ move }, moveIndex) => {
    const row = Math.floor(move / 3) + 1;
    const col = (move % 3) + 1;
    const desc = moveIndex ?
      `Go to move #${moveIndex} (${row}, ${col})` :
      'Go to game start';
    return { moveIndex, desc };
  });

  if (!sortAscending) {
    moves.reverse();
  }

  const handleSquareClick = (i) => {
    const newHistory = history.slice(0, currentMove + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = currentMove % 2 === 0 ? 'X' : 'O';
    setHistory([...newHistory, { squares, move: i }]);
    setCurrentMove(newHistory.length);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
  };

  const moveList = moves.map(({ moveIndex, desc }) => (
    <li key={moveIndex}>
      <button onClick={() => jumpTo(moveIndex)}>{desc}</button>
    </li>
  ));

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={handleSquareClick}
          winningSquares={winner ? winner.winningSquares : null}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={() => setSortAscending(!sortAscending)}>
          {sortAscending ? 'Sort Descending' : 'Sort Ascending'}
        </button>
        <ol>{moveList}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] };
    }
  }
  return null;
}

export default Game;