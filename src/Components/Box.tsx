import { useState } from 'react';
import '../Styles/Box.css';

type BoxProps = {
    border: number,
    turn: number,
    setTurn: (turn: number) => void,
    stop: boolean,
    board: number[],
    setBoard: (arr: number[]) => void, 
}

const Box = ({ border, turn, setTurn, stop, board, setBoard}: BoxProps): JSX.Element => {
    const [val, setVal] = useState<string>('');
    const [marked, setMarked] = useState<boolean>(false);
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