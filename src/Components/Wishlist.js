import Wishcard from "./Wishcard";

function Wishlist({ likedTours, setLikedTours }) {
    return (
      <div className="cards">
        {likedTours.map((tour) => (
          <Wishcard key={tour.id} {...tour} likedTours={likedTours} setLikedTours={setLikedTours} />
        ))}
      </div>
    );
  }
  
  export default Wishlist;
  