import { useState, useEffect } from "react";
import DropdownInput from "./components/DropdownInput";
import axios from "axios";

function App() {
  // Props untuk list Pokemon
  const [pokemon, setPokemon] = useState([]);
  // Props untuk Label Form
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Fetch API Pokemon
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  // Kondisi submit muncul
  useEffect(() => {
    const submit = document.getElementById("submit");
    if (selectedPokemon === null) {
      submit.classList.add("hidden");
    } else {
      submit.classList.remove("hidden");
    }
    // console.log("setelah di parent", selectedPokemon)
  }, [selectedPokemon]);

  // alert untuk submit
  const [isSubmit, setIsSubmit] = useState(false);
  
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmit(true);
    setIsChange(false);
  }

  // cek perubahan pada dropdown untuk menghilangkan hasil dan continue
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    if (isChange === true) {
      setIsSubmit(false)
    }
  },[isChange])
  console.log("isi is Change", isChange)
  console.log("isi is Submit", isSubmit)

  return (
    <>
      <div className="container pt-10">
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2">
          <DropdownInput pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} setIsChange={setIsChange}/>
          <button className="bg-green-600 rounded-md px-3 py-2 text-white hidden" id="submit" type="submit">
            Submit
          </button>
        </form>
        {isSubmit === false ? null :(
          <div className="pt-10 flex justify-center items-center gap-2">
            <p className="text-2xl">{selectedPokemon.name}</p>
            <button className="px-3 py-2 text-white bg-green-600 rounded-md">Continue</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
