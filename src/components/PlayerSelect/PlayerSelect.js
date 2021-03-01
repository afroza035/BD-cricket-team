import React from 'react';
import './PlayerSelect.css';

const PlayerSelect = (props) => {
    const select = props.select;
    let player = [];
   for (let i = 0; i < select.length; i++) {
        const selectPlayer = select[i];
        const name = selectPlayer.name;
        const salary = selectPlayer.sallary;
        player = player + name + "(" + salary + "), ";
     
    }
    let totalSallary = 0;
    for (let i = 0; i < select.length; i++) {
        const selectPlayer = select[i];
        
        const playerSallaryNumber = parseInt(selectPlayer.sallary);
        totalSallary = totalSallary + playerSallaryNumber;
    }
    
   
    return (
        <div className="selectStyle">
            <h3>Total select: {select.length}</h3>
            <h3>Players name: {player}</h3>
            <h3>Total budget: {totalSallary}.</h3>
        </div>
    );
};

export default PlayerSelect;