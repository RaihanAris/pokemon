import React, { useState } from "react";
import { Select } from "flowbite-react";

const DropdownInput = (props) => {
  const handleSelect = (event) => {
    props.handleChange(event.target.value);
  };
  return (
    <>
      <select name="selectPokemon" id="selectPokemon" onChange={handleSelect}>
        <option value={props.default}>{props.default}</option>
        {props.pokemon.map((pokemon) => {
          return (
            <option key={pokemon.url} value={pokemon.url}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropdownInput;
