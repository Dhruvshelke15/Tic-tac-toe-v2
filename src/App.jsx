import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import Square from './components/Square';
import { calculateWinner } from './components/winner';
import Status from './components/Status';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXnext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGameState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGameState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGameState.isXnext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGameState) + 1)
        : currentHistory;

      return currentHistory.concat({
        squares: nextSquareState,
        isXnext: !lastGameState.isXnext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span>{' '}
        <span className="text-orange">TOE</span>
      </h1>
      <Status winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <h2
        style={{
          fontWeight: 'normal',
        }}
      >
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
