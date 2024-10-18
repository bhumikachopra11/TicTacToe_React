import React, { useRef } from "react";

const ClickerCounter = () => {
    const countRef = useRef(0);
    const displayRef = useRef(null);

    const handleClick = () => {
        countRef.current += 1;
        displayRef.current.textContent = countRef.current;
    }

    return (
        <div>
            <h1 ref={displayRef}>0</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ClickerCounter;