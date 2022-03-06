import React from "react";
import "./styles.scss";

import { usePokeState } from "./usePokeState"
import SelectedPoke from "./components/selectedPoke";
import PokeList from "./components/PokeList";

function App() {

  const [ pokemen,selectedPokemon, handlePoke ] = usePokeState();

  // const [pokemen, setPokemen] = useState([]);
  // const [selectedPokemon, setSelectedPokemon] = useState({});

  // useEffect(() => {
  //   setPokemen(pokemonServices.fetchAllPoke());
  // }, []);

  // const handlePoke = (id) => {
  //   pokemonServices.fetchSelectedPoke(id).then((data) => {
  //     setSelectedPokemon(res.data);
  //   })
  // };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;
