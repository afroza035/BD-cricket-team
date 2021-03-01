import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';

function App() {
  const [player, setPlayer] = useState([]);
  const [select, setSelect] = useState([]);


  useEffect(() => {
    setPlayer(playerData)
  }, [])

  const clickButton = (players) => {
    const newSelect = [...select,players];
    setSelect(newSelect)
  }

  return (
    <div className="App">
      <div className="PlayerDetails">   
        {
          player.map(players => <PlayerDetails players={players} clickButton = {clickButton} key = {players.id}></PlayerDetails>)
        }
      </div>
      <div className="PlayerSelect">
        <PlayerSelect select={select}></PlayerSelect>
      </div>

    </div>
  );
}

export default App;
