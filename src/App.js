import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => {
  const [tours, setTours] = useState(data)

  return (
    <>
      <Tours tours={tours} setTours={setTours}/>
    </>
  );
};

export default App;
