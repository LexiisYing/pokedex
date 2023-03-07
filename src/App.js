import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./Caught";


function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date =  new Date().toLocaleDateString();
  function logWhenClicked() {
    console.log("I was clicked!");
  }
  return (
    <div>
    <Logo appName="Lexi's Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon newAbilities = {abilities}/>
    <CaughtPokemon newDate = {date}/>
    </div>);
}

// <Logo  />

export default App;
