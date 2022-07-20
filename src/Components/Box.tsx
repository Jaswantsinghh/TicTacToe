import { useState } from 'react';
import '../Styles/Box.css';

type AppProps = {
    border: number,
    turn: number,
    setTurn: Function,
    stop: Boolean,
    board: number[],
    setBoard: Function, 
}

const Box = ({ border, turn, setTurn, stop, board, setBoard}: AppProps): JSX.Element => {
    const [val, setVal] = useState('');
    const [marked, setMarked] = useState(false);
    const handleClick = (): void => {
        if(!stop && !marked) {
            setVal(turn % 2 === 0 ? '×':'o');
            setTurn(turn+1);
            setMarked(true);
            const boardDuplicate: number[] = board;
            boardDuplicate[border-1] = turn % 2 === 0 ? 1 : 2;
            setBoard(boardDuplicate);
        }
    }
    return(
        <div className={`box border-${border}`} onClick={handleClick}>
            {val}
        </div>
    );
}

export default Box;