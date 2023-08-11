import React, { useState } from "react";
import DigitalClock from "./Components/DigitalClock";
import "./App.css";

const App = () => {
  const [isDarkTheme] = useState(false);

  return (
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
      <header className="App-header">
        <DigitalClock />
      </header>
    </div>
  );
};

export default App;
