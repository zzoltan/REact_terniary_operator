import React from "react";
import Urlap from "./Form";
const loggedIn = false;
// function renderCompoment() {
//   if (loggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Urlap />;
//   }
// }

function App() {
  // below is the example of the terniary operator
  return (
    <div className="container">{loggedIn ? <h1>Hello</h1> : <Urlap />}</div>
  );
}

export default App;
