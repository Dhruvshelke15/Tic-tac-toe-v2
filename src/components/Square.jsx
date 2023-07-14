import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClass = value === 'X' ? 'text-orange' : 'text-green';
  const winningClass = isWinningSquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorClass} 
      ${winningClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
