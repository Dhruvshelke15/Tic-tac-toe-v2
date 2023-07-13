const Status = ({ winner, isXnext, squares }) => {
  const noMoves = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXnext ? 'X' : 'O';

  const renderStatus = () => {
    if (winner) {
      return <>Winner is {winner}</>;
    }
    if (!winner && noMoves) {
      return (
        <>
          <span className="text-green">O</span> and{' '}
          <span className="text-orange">X</span> have tied.
        </>
      );
    }
    if (!winner && !noMoves) {
      return (
        <>
          Next Player is{' '}
          <span className={isXnext ? 'text-orange' : 'text-green'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  return <h2 className="status-message">{renderStatus()}</h2>;
};

export default Status;
