import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./Caught";


function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const date =  new Date().toLocaleDateString();

  return (
    <div>
    <Logo appName="Pokedex"/>
    <BestPokemon newAbilities = {abilities}
 />
    <CaughtPokemon newDate = {date}/>
    </div>);
}

// <Logo  />

export default App;