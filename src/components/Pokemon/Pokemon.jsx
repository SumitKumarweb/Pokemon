import './Pokemon.css'

function Pokemon({ name, image}) {
  return (
    <div className="Pokemon-card">
      <img src={image} alt="" />
      <div className="cardInfo">
        <span>Name : {name}</span>
      </div>
    </div>
  );
}
export default Pokemon;
