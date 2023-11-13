import React, { useState } from "react";

function Cards(props) {
  const {id, name, info, image, price, tours, setTours, likedTours, setLikedTours } = props;
  const [readmore, setReadmore] = useState("...Read More")
  const [desc, setDesc] = useState(`${info.substring(0, 200)}`);
  const [checked, setChecked] = useState(false)

  console.log(tours);

  function readmoreHandler() {
    if (readmore === "...Read More") {
      setReadmore(" Show Less")
      setDesc(info)
    }
    else{
      setReadmore("...Read More")
      setDesc(`${info.substring(0, 200)}`)
    }
  }

  function tourHandler() {
    
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  
  }

  function likedHandler() {
    if (!checked) {
      const filteredData = tours.find((tour) => tour.id === id);
      console.log(filteredData);
  
      // Check if the tour is not already in likedTours 
      if (!likedTours.some((likedTour) => likedTour.id === id)) {
        setLikedTours((prevLikedTours) => [...prevLikedTours, {...filteredData}]);
        
      }

      setChecked(true);
    }
  }
  
  

  console.log(likedTours);


  return (
    <div className="card">
      <img src={image} alt={name} className="image"/>

      <div className="card-desc">
        <h2 className="price">₹ {price}</h2>
        <h3 className="name">{name}</h3>
        <p className="info">{desc}<span className="read-more" onClick={readmoreHandler}>{readmore}</span></p>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={tourHandler}>Not Interested</button>
        <i className={`fa-solid fa-heart ${checked ? 'active' : ''}`} onClick={likedHandler}></i>
      </div>
    </div>
  );
}

export default Cards;
