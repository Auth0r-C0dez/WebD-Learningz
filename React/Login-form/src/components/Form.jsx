import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegister === false ?
        <input type="password" placeholder="Confirm Password" /> :
        null
      }
      
      <button type="submit">{props.isRegister ? "Login" : "Sign In" }</button>
      
    </form>
  );
}

export default Form;
