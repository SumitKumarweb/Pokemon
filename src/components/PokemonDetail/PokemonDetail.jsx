import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetail.css'

function PokemonDetail() {
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    async function downloadPokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const responseData = response.data;
            setPokemon({
                name: responseData.name,
                image: responseData.sprites.other.dream_world.front_default,
                weight: responseData.weight,
                height: responseData.height,
                type: responseData.types.map((t) => t.type.name),
            });
        } catch (error) {
            console.error("Error fetching Pokemon:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pokemonDetail-container">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.type.map((t) => (
                    <div key={t}>{t}</div>
                ))}
            </div>
        </div>
    );
}

export default PokemonDetail;
