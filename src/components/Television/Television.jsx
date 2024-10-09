import React, { useState } from 'react';

const Television = () => {
    const number = 5;
    const [counter, setCounter] = useState(number);
    
    return (
        <div className="border-2  border-purple-700 m-6 p-5">
            {/* <h1>Television: {number}</h1> */}
            <h1>Television: {counter}</h1>
            <button>UP</button>
        </div>
    );
};

export default Television;