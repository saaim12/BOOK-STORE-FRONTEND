import React from "react";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      {/* Uncomment Home if needed */}
      {/* <Home /> */}
      <Shop />
    </div>
  );
}

export default App;
