import React, { useState } from "react";
import data from "./data";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tours from "./Components/Tours";
import Wishlist from "./Components/Wishlist";

const App = () => {
  const [tours, setTours] = useState(data)
  const [likedTours, setLikedTours] = useState([]);
  const [currentTab, setCurrentTab] = useState("home")


  return (
    <div className="wrapper">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      { currentTab === "home" ?
      (
      <Tours tours={tours} setTours={setTours} likedTours={likedTours} setLikedTours={setLikedTours}/>
      ) :
      (
      <Wishlist likedTours={likedTours} setLikedTours={setLikedTours}/>
      )
      }
      <Footer />
    </div>
  );
};

export default App;
