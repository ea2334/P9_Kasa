function Card({ apartment }) {
  return (
    <div className="card">
      <img src={apartment.image} alt={apartment.title} className="card-image" />
      <h3 className="card-title">{apartment.title}</h3>
      <p className="card-description">{apartment.description}</p>
    </div>
  );
}

export default Card;





