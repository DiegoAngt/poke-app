import { useEffect, useState } from 'react';
import './App.css';
import Actions from './game/buttons/Actions';
import Pad from './game/buttons/Pad';
import StartSelect from './game/buttons/StartSelect';
import Screen from "./game/Screen";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [pantalla, setPantalla] = useState('seleccion');
  const [selectedPokemones, setSelectedPokemones] = useState([]);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [rivalHealth, setRivalHealth] = useState(100);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const BASE_URL = 'https://pokeapi.co/api/v2/';

  const getPokemones = async () => {
    const res = await fetch(BASE_URL + "/pokemon");
    const data = await res.json();
    const pokemonDetails = await getDetails(data.results);
    setPokemones(pokemonDetails);
  };

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map(p => p.json()));
    return data;
  };

  const handlePress = (dir) => {
    if (dir === 'right' && hoverPokemon <pokemones.length) {
      setHoverPokemon(hoverPokemon + 1);
    }
    if (dir === 'left' && hoverPokemon>1) {
      setHoverPokemon(hoverPokemon - 1);
    }
  };

  const handleSelectPokemon = () => {
    const pokemonSelected = pokemones.find(
      (pokemon) => pokemon.id === hoverPokemon
    );
    const rivalSelected = computerSelection();
    const selections = [pokemonSelected, rivalSelected];
    setSelectedPokemones(selections);
    setPlayerHealth(100);
    setRivalHealth(100);
    setIsPlayerTurn(true);
    setPantalla('batalla');
  };

  const computerSelection = () => {
    const randomIndex = Math.floor(Math.random() * pokemones.length);
    return pokemones[randomIndex];
  };

  const handleAttack = () => {
    if (playerHealth === 0 || rivalHealth === 0) return;

    if (isPlayerTurn) {
      const damage = Math.floor(Math.random() * 16) + 10;
      setRivalHealth(prev => Math.max(prev - damage, 0));
    } else {
      const damage = Math.floor(Math.random() * 16) + 10;
      setPlayerHealth(prev => Math.max(prev - damage, 0));
    }

    setIsPlayerTurn(!isPlayerTurn);
  };

  useEffect(() => {
    getPokemones();
  }, []);

  useEffect(() => {
    if (playerHealth === 0 || rivalHealth === 0) {
      setTimeout(() => {
        alert(playerHealth === 0 ? '¡Perdiste!' : '¡Ganaste!');
        setPantalla('seleccion');
        setSelectedPokemones([]);
      }, 600);
    }
  }, [playerHealth, rivalHealth]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '350px',
          height: '500px',
          border: '2px black solid',
          borderRadius: '5px 5px 35px 5px',
          backgroundColor: 'white',
        }}
      >
        <Screen
          pokemones={pokemones}
          hoverPokemon={hoverPokemon}
          pantalla={pantalla}
          selectedPokemones={selectedPokemones}
          playerHealth={playerHealth}
          rivalHealth={rivalHealth}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Pad handlePress={handlePress} />
          <StartSelect handleSelectPokemon={handleSelectPokemon} />
          <Actions handleAttack={handleAttack} />
        </div>
      </div>
    </div>
  );
}

export default App;
