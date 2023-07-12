import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import Square from './components/Square';

function App() {
  return (
    <div className="app">
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
