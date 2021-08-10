import React from "react";
import Login from "./Input";

function Form() {
  return (
    <form className="form">
      <Login type="text" data="Username" />
      <Login type="password" data="Password" />
      {/* <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" /> */}
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
