import {  useState } from 'react'
import { useInterval } from "react-use"
import './TextAnimation.scss'

const TextAnimation = () => {
    const itemsArray = ['ideas', 'work', 'creation', 'vision', 'passion', 'approach to life'];
    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(true);

    useInterval(
        () => {
            setCount((prevCount) => (prevCount + 1) % itemsArray.length);
        },
        play ? 4500 : null
    );

    return (
        <div className='animated'>
            {/* <span>{itemsArray[count]}</span> */}
        </div>
    );
};

export default TextAnimation