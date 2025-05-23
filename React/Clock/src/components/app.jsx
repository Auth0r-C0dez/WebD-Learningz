import React, { useState } from "react";

function App() {

  setInterval(shomoi,1000);

  const now = new Date().toLocaleTimeString();
  //console.log(now);

 const [time, setTime] = useState(now);

 function shomoi () {
  const now = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit',second:'2-digit'  });
  setTime(now);
 }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={shomoi}>Get Time</button>
    </div>
  );
}

export default App;
