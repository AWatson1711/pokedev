import React, { useState } from 'react';


const Like = () => {
    const [counter, setCounter] = useState(0);
    return (
            <i className="fa-solid fa-heart" onClick={()=>{setCounter(counter + 1)}}>
                {counter}
            </i>
    );
};

export default Like;