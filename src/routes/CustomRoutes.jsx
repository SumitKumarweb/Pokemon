import { Routes, Route } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";
import Pokedex from "../components/Pokedex/Pokedex"


function CustomRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Pokedex/>}/>

            <Route path='/pokemon/:id' element={<PokemonDetail/>}/>
        </Routes>
    )
}

export default CustomRoutes;