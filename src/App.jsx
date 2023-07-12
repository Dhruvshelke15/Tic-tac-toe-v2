import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import Square from './components/Square';

function App() {
  const [counter, setCounter] = useState(1);
  const onBtnClick = () => {
    console.log('csdfsdf');
    setCounter(counter + 1);
  };

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>afasf</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
