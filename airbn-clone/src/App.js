import React from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";

const App = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <Rentals />
    </div>
  );
};

export default App;
