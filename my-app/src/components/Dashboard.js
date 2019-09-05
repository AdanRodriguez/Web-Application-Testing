import React from "react";

const Dashboard = ({ strike, setStrike, ball, setBall}) => {
    const strikeHandle = () => {
        if(strike <=1) {
            setStrike(strike +1)
        } else {
            setStrike(0);
            setBall(0);
        };
    };

    const ballHandle = () => {
        if(ball <=2) {
            setBall(ball + 1)
        } else {
            setStrike(0);
            setBall(0);
        };
    };

    const foulHandle = () => {
        if(strike <=1) {
            setStrike(strike +1);
        };
    };

    return (
        <div>
            <button onClick={strikeHandle}>Strike</button>
            <button onClick={ballHandle}>Ball</button>
            <button onClick={foulHandle}>Foul</button>
            <button onClick={() => {setStrike(0); setBall(0)}}>Hit</button>
        </div>
    );
};

export default Dashboard;