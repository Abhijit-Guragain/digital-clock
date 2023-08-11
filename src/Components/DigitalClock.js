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

  const themeClass = isDarkTheme ? "dark" : "light";
  const themeText = isDarkTheme ? "Light" : "Dark";

  const options = {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long",
  };

  const formatter = new Intl.DateTimeFormat(undefined, options);
  const formattedTime = formatter.formatToParts(currentTime);

  let timeString = "";
  let timeZone = "";

  for (const part of formattedTime) {
    if (part.type === "hour") {
      timeString += part.value;
    } else if (part.type === "literal") {
      timeString += part.value;
    } else if (part.type === "minute") {
      timeString += part.value;
    } else if (part.type === "second") {
      timeString += part.value;
    } else if (part.type === "dayPeriod") {
      timeString += part.value;
    }
  }

  return (
    <div className={`digital-clock ${themeClass}`}>
      <span className="heading">Current Time: </span>
      <span className="time">
        {timeString}
        <div className="timezone">{timeZone}</div>
      </span>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {themeText} Theme
      </button>
      <div className="by-ag">-by A.G.</div>
    </div>
  );
};

export default DigitalClock;
