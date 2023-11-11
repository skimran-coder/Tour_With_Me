import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => {
  const [tours, setTours] = useState(data)

  return (
    <div className="container">
      <Tours tours={tours} setTours={setTours}/>
    </div>
  );
};

export default App;
