import { useState, useId } from 'react'
import './App.css'
import Box from './Components/Box';

function App() {
  const id = useId();
  const numArray: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="ttt-container">
        {numArray.map(( num ) => (
          <Box key={`${id}-${num}`} border={num} />
        ))}
      </div>
    </div>
  )
}

export default App
