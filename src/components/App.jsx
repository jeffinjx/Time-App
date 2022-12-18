import React, { useState } from "react";

function App() {
  // const time = new Date().toLocaleTimeString();
  const [text, setTime] = useState("Time");

  function clock() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function runClock() {
    setInterval(clock, 1000);
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <button onClick={runClock}>Get Time</button>
    </div>
  );
}

export default App;
