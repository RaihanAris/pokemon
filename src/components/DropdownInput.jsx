import React, { useState } from "react";
function DropdownInput ({pokemon, setSelectedPokemon, setIsChange}){
  return (
    <>
      <select name="selectPokemon" id="selectPokemon" onChange={(event)=>{
        const value = event.currentTarget.value;
        setSelectedPokemon(JSON.parse(value));
      }}>
        <option value="null">Pilih Pokemon</option>
        {pokemon.map((item) => {
          return (
            <option key={item.url} value={JSON.stringify({ name: item.name, url: item.url })}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropdownInput;
