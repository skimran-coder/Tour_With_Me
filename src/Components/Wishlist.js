// Wishlist component
function Wishlist({ likedTours }) {
    return (
      <div>
        <h2>Wishlist</h2>
        <ul>
          {likedTours.map((tour) => (
            <li key={tour.id}>{tour.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Wishlist;