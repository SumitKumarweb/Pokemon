import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon({ name, image , id}) {
  return (
    <div className="Pokemon-card">
      <Link to={`/pokemon/${id}`}>
      <img src={image} alt="" className='img' />
      <div className="cardInfo">
        <span>Name : {name}</span>
      </div>
      </Link>
    </div>
  );
}
export default Pokemon;
