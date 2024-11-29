import { useState, useEffect } from "react";
import DropdownInput from "./components/DropdownInput";
import axios from "axios";

function App() {
  // Props untuk list Pokemon
  const [pokemon, setPokemon] = useState([]);
  // Props untuk Label Form
  const [label, setLabel] = useState("Pilih Pokemon");

  // Fetch API Pokemon
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  // Fetch API detail Pokemon
  const [pokemonLink, setPokemonLink] = useState("");
  const [detailLink, setDetailLink] = useState("");

  // Function untuk set value form
  function handleChange(value) {
    setLabel(value);
    console.log("update", label);
  }

  // Kondisi submit muncul
  useEffect(() => {
    const submit = document.getElementById("submit");
    if (label === "Pilih Pokemon") {
      submit.classList.add("hidden");
    } else {
      submit.classList.remove("hidden");
    }
  }, [label]);

  // alert untuk submit
  function handleSubmit(event) {
    event.preventDefault();
    setPokemonLink(label);
    console.log(pokemonLink);
  }
  return (
    <>
      <div className="container pt-10">
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2">
          <DropdownInput label={label} pokemon={pokemon} handleChange={handleChange} default={"Pilih Pokemon"} />
          <button className="bg-green-600 rounded-md px-3 py-2 text-white hidden" id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
