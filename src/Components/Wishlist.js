import EmptyWishlist from "./EmptyWishlist";
import Wishcard from "./Wishcard";

const Wishlist = ({ likedTours, setLikedTours }) => {
    return (
      likedTours.length !== 0 ?

      (<div className="cards">
        {likedTours.map((tour) => (
          <Wishcard key={tour.id} {...tour} likedTours={likedTours} setLikedTours={setLikedTours} />
        ))}
      </div>) :
      (
        <EmptyWishlist/>
      )
    );
  }
  
  export default Wishlist;
  