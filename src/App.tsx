import { useState, useId, useEffect } from 'react'
import './App.css'
import Box from './Components/Box';

function App(): JSX.Element {
  const id = useId();
  const numArray: number [] = Array.from({length: 9}, (_, i) => i + 1);
  const [stop, setStop] = useState(false);
  const [turn, setTurn] = useState(1);
  const [board, setBoard] = useState(Array.from({length: 9}, (_, i) => i + 11));
  const [winner, setWinner] = useState('');

  const checkWinner = (): void => {
    if(board[0] === board[1] && board[1] === board[2]) {
      setWinner(board[0] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[3] === board[4] && board[4] === board[5]) {
      setWinner(board[3] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[6] === board[7] && board[7] === board[8]) {
      setWinner(board[6] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[0] === board[3] && board[3] === board[6]) {
      setWinner(board[0] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[1] === board[4] && board[4] === board[7]) {
      setWinner(board[1] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[2] === board[5] && board[5] === board[8]) {
      setWinner(board[2] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[0] === board[4] && board[4] === board[8]) {
      setWinner(board[0] === 1 ? 'x' : 'o');
      setStop(true);
    }
    if(board[2] === board[4] && board[4] === board[6]) {
      setWinner(board[2] === 1 ? 'x' : 'o');
      setStop(true);
    }
  }

  useEffect(() => {
    checkWinner();
  }, [turn]);

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="ttt-container">
        {numArray.map(( num ) => (
          <Box
          key={`${id}-${num}`}
          border={num}
          turn={turn}
          setTurn={setTurn}
          stop={stop}
          board={board}
          setBoard={setBoard}
          />
        ))}
      </div>
      <h1>{!stop ? (turn % 2 === 0 ? 'Player 2 Turn (x)' : 'Player 1 Turn (o)') : `${winner === 'x' ? 'Player 2 (x) won' : 'Player 1 (o) won'}`}</h1>
    </div>
  )
}

export default App
