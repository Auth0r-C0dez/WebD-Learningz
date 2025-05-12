import React ,{useState} from "react";



function App() {
  const [number, func] = useState(0);

 function increase () {
   func(number + 1);
 }
 function decrease() {
  func(number-1);
 }
  return (
    <div className="container">
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
