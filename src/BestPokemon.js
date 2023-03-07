import React from "react";

const BestPokemon = (props) => {
  return <div>
    <p>My favorite Pokemon is Squirtle.</p>
    <ul>
      {props.newAbilities.map((ability) => (
        <li>{ability}</li>
      ))}
    </ul>
    </div>;
};

export default BestPokemon;