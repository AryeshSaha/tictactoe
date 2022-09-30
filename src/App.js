import React, { useState, useEffect } from 'react';
import './App.css';
import SquareComps from './comp/square/Square';
import Name_of_Game from './comp/Name/Name';
import CopyRights from './comp/CP/Cp';

const initialState = [null, null, null, null, null, null, null, null, null]

function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateXChance] = useState(false)

  const onClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index])
      return;
    strings[index] = isXChance ? "X" : "O";
    updateXChance(!isXChance);
    updateGameState(strings);
  }

  const clearGame = () => {
    updateGameState(initialState)
  }

  const checkWinner = () => {
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
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      alert(`Yay! ${winner} won the Game !`)
      clearGame();
    }
  }, [gameState])

  return (
    <div className="App">

      <div className='name-of-game'>
        <Name_of_Game />
      </div>

      <div className="app-header">
        <div className="row jc-center">
          <SquareComps className="b-bottom-right" onClick={() => onClicked(0)} state={gameState[0]} />
          <SquareComps className="b-bottom-right" onClick={() => onClicked(1)} state={gameState[1]} />
          <SquareComps className="b-bottom" onClick={() => onClicked(2)} state={gameState[2]} />
        </div>
        <div className="row jc-center">
          <SquareComps className="b-bottom-right" onClick={() => onClicked(3)} state={gameState[3]} />
          <SquareComps className="b-bottom-right" onClick={() => onClicked(4)} state={gameState[4]} />
          <SquareComps className="b-bottom" onClick={() => onClicked(5)} state={gameState[5]} />
        </div>
        <div className="row jc-center">
          <SquareComps className="b-right" onClick={() => onClicked(6)} state={gameState[6]} />
          <SquareComps className="b-right" onClick={() => onClicked(7)} state={gameState[7]} />
          <SquareComps onClick={() => onClicked(8)} state={gameState[8]} />
        </div>
        <button className='clear-button' onClick={clearGame}>Clear Game</button>
      </div>

      <div className='CP'>
        <CopyRights />
      </div>

    </div>
  );
}

export default App;
