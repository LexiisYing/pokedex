import React from "react";

const BestPokemon = (props) => {
  return <div>
    <p>My favorite Pokemon is Squirtle.</p>
    <ul>
      {props.newAbilities.map((ability, index) => (
        <li key={index}>{ability}</li>
      ))}
    </ul>
    </div>;
};

export default BestPokemon;

