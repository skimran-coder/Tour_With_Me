import React from "react";
import Cards from "./Cards";
import EmptyTour from "./EmptyTour";

function Tours({ tours, setTours, likedTours, setLikedTours }) {
  
  return (


    tours.length !== 0 ? (
        <div className="cards">
          {tours.map((tour) => (
            <Cards key={tour.id} {...tour} tours={tours} setTours={setTours} likedTours={likedTours} setLikedTours={setLikedTours}/>
          ))}
        </div>
      ) : (
        <EmptyTour setTours={setTours} />
      )
      
    
  );
}

export default Tours;
