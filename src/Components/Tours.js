import React from "react";
import Cards from "./Cards";
import EmptyTour from "./EmptyTour";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Tours({ tours, setTours }) {
  return (
    <div className="container">
      <NavBar />
      {tours.length !== 0 ? (
        <div className="cards">
          {tours.map((tour) => (
            <Cards key={tour.id} {...tour} tours={tours} setTours={setTours} />
          ))}
        </div>
      ) : (
        <EmptyTour setTours={setTours} />
      )}
      <Footer />
    </div>
  );
}

export default Tours;
