import React from "react";
import Login from './Login';

let isLoggedIn = false;

// For ternary operators you can use "null" as a condition
// currentTime > 12 && <h1>Why are you still working?</h1>
// && opearator exactly does the same thing with ternary operator question mark
const App = () => {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello there...</h1> : <Login />}
    </div>
  );
}

export default App;
