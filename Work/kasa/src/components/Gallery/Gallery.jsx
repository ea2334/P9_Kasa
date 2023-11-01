function Gallery({ apartments }) {
    return (
      <div className="gallery">
        {apartments.map((apartment, index) => (
          <Card key={index} apartment={apartment} />
        ))}
      </div>
    );
  }
  
  export default Gallery;
  