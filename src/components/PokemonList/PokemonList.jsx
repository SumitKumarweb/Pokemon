import { useEffect, useState } from "react";
import "./PokemonList.css";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function pokemonData() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const PokemonResult = response.data.results;
    const pokemonPromise = PokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonData = await axios.all(pokemonPromise);
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types[0].type.name,
      };
    });
    setPokemonList(res);
    setIsLoading(false);
  }

  useEffect(async () => {
    pokemonData();
  }, []);

  return (
    <div className="wrapper-pokemonList">
      <span>PokemonList</span>
      {isLoading
        ? "Loading..."
        : pokemonList.map((p) => (
          <Pokemon
            key={p.id}
            name={p.name}
            image={p.image}
            type={p.type}
          />
        ))}
    </div>
  );
}
export default PokemonList;
