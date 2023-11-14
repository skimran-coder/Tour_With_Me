import { useState } from "react";

const Wishcard = (props) => {
    const {id, name, info, image, price, likedTours, setLikedTours} = props;
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

      function removeWishlist() {
        const filteredData = likedTours.filter((tour) => tour.id !== id);
        setLikedTours(filteredData)
      }

    return (
        <div className="card">
          <img src={image} alt={name} className="image"/>
    
          <div className="card-desc">
            <h2 className="price">₹ {price}</h2>
            <h3 className="name">{name}</h3>
            <p className="info">{desc}<span className="read-more" onClick={readmoreHandler}>{readmore}</span></p>
          </div>
    
          <div className="btn-container">
            <button className="btn" onClick={removeWishlist}>Remove from wishlist</button>
            <i className="fa-solid fa-heart active" onClick={removeWishlist}></i>
          </div>
        </div>
      );
}

export default Wishcard;