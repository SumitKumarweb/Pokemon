function Pokemon({ name, image, type }) {
  return (
    <div className="Pokemon-card">
      <img src={image} alt="" />
      <div className="cardInfo">
        <h1>Name : {name}</h1>
        <h1>Type : {type}</h1>
      </div>
    </div>
  );
}
export default Pokemon;
