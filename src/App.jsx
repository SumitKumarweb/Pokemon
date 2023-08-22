import { Link } from 'react-router-dom'
import './App.css'
import Search from './components/search/Search'
import CustomRoutes from "./routes/CustomRoutes"

function App() {

  return (
    <>
      <div className="pokedex-wrapper">
        <Link to='/'>
        <h1>Pokedex.com</h1>
        </Link>
        <Search/>
      </div>
      <CustomRoutes />
    </>
  )
}

export default App
