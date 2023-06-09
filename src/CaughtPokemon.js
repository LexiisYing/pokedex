import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  //const pokemonNames = ["Charmander", "Charizard", "Venusaur"];
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  // function getRandomName() {
  //   let randomIndex = Math.floor(Math.random() * pokemonNames.length);
  //   return pokemonNames[randomIndex];
  // }
  function catchPokemon() {
    pokemonNameInput && setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);

  }
  return <>
      <ul>{caught.map((item, index) => {
            return <li key={index}>Caught {item} on {props.newDate} </li>;
            })}

      </ul>
      <input type={"text"}
      value={pokemonNameInput}
      onChange={handleInputChange}
      />
       <button onClick={catchPokemon}>click me</button>

  </>

  ;
};

export default CaughtPokemon;