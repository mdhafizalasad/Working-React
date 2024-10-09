import React from 'react';

const Mobile = (props) => {
    const {price} = props;
    return (
        <div className="border-2 border-blue-500 m-6 p-5">
            <h1>Mobile : {price}</h1>
        </div>
    );
};

export default Mobile;