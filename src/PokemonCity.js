import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
        <input type={"text"}
        placeholder="city"
        value={city}
        onChange={updateCity} />
      <p>Welcome to my city of {city}</p>
    </div>
  );
}

export default PokemonCity;