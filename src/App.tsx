import { useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Player } from './interfaces';
import filter from './helpers';

const API_URL = 'https://mach-eight.uc.r.appspot.com';
const NO_MATCHES = 'No matches found';


function App() {
  const [pairPlayers, setPairPlayers] = useState<Array<Player[]>>([]);
  const [dataRaw, setDataRaw] = useState<Player[]>([]);
  const [input, setInput] = useState();

  useEffect(() => {
    const loadPlayers = async () => {
      const response = await axios.get(API_URL);
      const data: Player[] = response?.data?.values || [];
      setDataRaw(data);
    }
    loadPlayers();
  }, [setDataRaw]);

  const handleOnKeyDown = useCallback((e) => {
    const value = e?.target?.value;
    const players = filter({ arr: dataRaw, input: value});
    setPairPlayers(players);
    setInput(value);
  }, [dataRaw, setPairPlayers, setInput]);

  const content = pairPlayers?.length === 0 && input ? NO_MATCHES
  : pairPlayers?.map((pairPlayer: Player[], index) => 
    <div className='pairPlayer' key={`pairPlayer-${index}`}>{
      pairPlayer?.map((player, ind) => (
      <div className='player' key={`player-${index}-${ind}`}>
        {`${player?.first_name} ${player?.last_name}`}
      </div>
      ))}
    </div>
  );

  return (
    <div className="App">
      <div className='input'>
        <label>Height Inches Total:</label>
        <input data-testid="h-input" type='number' onChange={handleOnKeyDown} />
      </div>
      <div data-testid="players-div" className='players'>
        {content}
      </div>
    </div>
  );
}

export default App;
