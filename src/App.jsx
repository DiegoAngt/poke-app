import { useEffect, useState } from 'react';
import './App.css';
import Actions from './game/buttons/Actions';
import Pad from './game/buttons/Pad';
import StartSelect from './game/buttons/StartSelect';
import Screen from "./game/Screen";


function App() {

  const [pokemones, setPokemones] = useState([]);

  const BASE_URL = 'https://pokeapi.co/api/v2/';

  const getPokemones = async() =>{
    const res = await fetch(BASE_URL + "/pokemon")
    const data = await res.json();
    console.log(data);
    const pokemonDetails =  await getDetails(data.results);
    setPokemones(pokemonDetails)
  }

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map(gato => gato.json()) );
    return data;
  }

  const handlePress = (dir) => {
    console.log(dir);
  }

  useEffect (() => {
    getPokemones();
  },[])


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* container game */}
        <div
          style={{
            width: '350px',
            height: '500px',
            border: '2px black solid',
            borderRadius: '5px 5px 35px 5px',
          }}
        >
          <Screen pokemones={pokemones}/>
          {/* container buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Pad handlePress={handlePress}/>
            <StartSelect />
            <Actions />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
