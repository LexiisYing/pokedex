import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const pokemonNames = ["Charmander", "Charizard", "Venusaur"];
  function getRandomName() {
    let randomIndex = Math.floor(Math.random() * pokemonNames.length);
    return pokemonNames[randomIndex];
  }
  function catchPokemon() {
    setCaught(caught.concat(getRandomName()));
  }
  return <>
    <ul>{caught.map((item, index) => {
          return <li key={index}>Caught {item} on {props.newDate} </li>;
          })}

    </ul>
    <button onClick={catchPokemon}>click</button>

  </>

  ;
};

export default CaughtPokemon;