import React, { useEffect, useState } from "react";
import "./PokemonList.css";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import './Loader.css'
function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  //
  const [pokedexUrl, setPokedexUrl] = useState('http://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  async function pokemonData() {
    setIsLoading(true);
    const response = await axios.get(pokedexUrl);
    const PokemonResult = response.data.results;

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    const pokemonPromise = PokemonResult.map((pokemon) => axios.get(pokemon.url));

    const pokemonData = await axios.all(pokemonPromise);

    const pokemonResponse = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types[0].type.name, // Corrected this line
      };
    });

    setPokemonList(pokemonResponse);
    setIsLoading(false);
  }

  useEffect(() => {
    pokemonData();
  }, [pokedexUrl]);

  return (
    <>
      <div className="wrapper-pokemonList">
        {isLoading
          ? (<div class="loader"></div>)
          : pokemonList.map((p) => (
            <Pokemon
              key={p.id}
              name={p.name}
              image={p.image}
              type={p.type}
            />
          ))}
      </div>
      <div className="controls">
        <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
        <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
      </div>
    </>
  );
}

export default PokemonList;
