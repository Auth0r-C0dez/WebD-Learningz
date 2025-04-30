import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(x => x*2); 
console.log(newNumbers)

//////Filter - Create a new array by keeping the items that return true.
const newNumberz = numbers.filter((num) => num <10);
console.log(newNumberz);


//Reduce - Accumulate a value by doing something to each item in an array.
var neuNumber = numbers.reduce( (accumulator, currentNumber) => {
     return accumulator + currentNumber;
 })
console.log(neuNumber);


////Find - find the first item that matches from an array.
const newNumber1 = numbers.find( (num) => {
  return num > 10;
 })
console.log(newNumber1);


////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
