import React, { useState } from 'react';
import Dashboard from "./Dashboard";

export default function Display(){
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);

    return (
        <div>
            <h1>At Bat</h1>
            <div>
                <h2 data-testid="board-strike">Strike</h2>
                <h2>{strike}</h2>
            </div>
            <div>
                <h2 data-testid="board-ball">Ball</h2>
                <h2>{ball}</h2>
            </div>
            <Dashboard 
                strike={strike}
                setStrike={setStrike}
                ball={ball}
                setBall={setBall}
            />
        </div>
    );
};

