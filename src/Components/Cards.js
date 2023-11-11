import React, { useState } from "react";

function Cards(props) {
  const {id, name, info, image, price, setTours } = props;
  const [readmore, setReadmore] = useState("...Read More")
  const [desc, setDesc] = useState(`${info.substring(0, 200)}`);

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


  return (
    <div>
      <img src={image} alt={name} />

      <div className="card-desc">
        <h2 className="price">{price}</h2>
        <h3 className="name">{name}</h3>
        <p className="info">{desc}<span className="read-more" onClick={readmoreHandler}>{readmore}</span></p>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={tourHandler}>Not Interested</button>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}

export default Cards;
