import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const themeClass = isDarkTheme ? "dark" : "light";
  const themeText = isDarkTheme ? "Light" : "Dark";

  return (
    <div className={`digital-clock ${themeClass}`}>
      <span className="heading">Current Time: </span>
      <span className="time">
        {hours < 10 ? "0" : ""}
        {hours}:{minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </span>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {themeText} Theme
      </button>
    </div>
  );
};

export default DigitalClock;
