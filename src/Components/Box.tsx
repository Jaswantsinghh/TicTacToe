import { useState } from 'react';
import '../Styles/Box.css';

type AppProps = {
    border: number
}

const Box = ({ border }: AppProps): JSX.Element => {
    const [val, setVal] = useState('');
    const handleClick = (): void => {
        setVal('o');
    }
    return(
        <div className={`box border-${border}`} onClick={handleClick}>
            {val}
        </div>
    );
}

export default Box;