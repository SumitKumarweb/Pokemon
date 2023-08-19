import PokemonList from '../PokemonList/PokemonList';
import './Search.css'

function Search(){
    return (
        <div>
            <input
            type="text"
            placeholder="Enter your Pokemon"
            />
            <PokemonList/>
        </div>
    )
}

export default Search;