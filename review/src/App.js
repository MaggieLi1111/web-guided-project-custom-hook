import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPoke from './components/SelectedPoke';

const PokeList = () => {
  return (<div id="pokeList">
    {pokemen.map((pokemon) => (
      <div
        onClick={() => handlePoke(pokemon.id)}
        key={pokemon.id}
        className="pokemon"
      >
        <img src={pokemon.img} alt={pokemon.name} />
        <div>
          <h3>{pokemon.name}</h3>
          {pokemon.next_evolution &&
            pokemon.next_evolution.map((e) => <p key={e.num}>{e.name}</p>)}
        </div>
      </div>
    ))}
  </div>);
}

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(data);
  }, []);

  const handlePoke = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setSelectedPokemon(res.data);
      });
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList />
    </div>
  );
}

export default App;
