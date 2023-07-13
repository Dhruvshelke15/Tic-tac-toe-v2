import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import Square from './components/Square';
import { calculateWinner } from './components/winner';
import Status from './components/Status';

function App() {
  const [isXnext, setisXnext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setisXnext(currentisXnext => !currentisXnext);
  };
  return (
    <div className="app">
      <div>
        <Status winner={winner} isXnext={isXnext} squares={squares} />
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </div>
  );
}

export default App;
