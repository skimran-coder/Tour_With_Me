import React from "react";
import Cards from "./Cards";
import EmptyTour from "./EmptyTour";
import Header from "./Header";
import Footer from "./Footer";

function Tours({ tours, setTours }) {
  return (
    <div className="container">
      <Header />
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
