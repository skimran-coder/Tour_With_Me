import React from "react";
import Cards from "./Cards";
import EmptyTour from "./EmptyTour";

function Tours({ tours, setTours }) {
  return (
    tours.length !== 0 ? (
      <div>
        <h1 className="heading">Tour With Imran</h1>
        {tours.map((tour) => (
          <Cards key={tour.id} {...tour} setTours={setTours} />
        ))}
      </div>
    ) : (
      <EmptyTour />
    )
  );
}

export default Tours;
