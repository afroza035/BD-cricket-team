import React from 'react';
import './PlayerDetails.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

const PlayerDetails = (props) => {
    const players = props.players;
    const {image, name, sallary} = players;
    const clickButton = props.clickButton;
    return (
        <div className="bodyStyle"> 
           <img src={image} alt=""/>
           <h2>{name}</h2>
           <p>sallary:{sallary}</p>
           <button className="btn btn-dark" onClick={()=>clickButton(players)}><FontAwesomeIcon icon={faPlus} /> Select</button>
        </div>
    );
};

export default PlayerDetails;