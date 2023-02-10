import React, { useState } from "react";
import "./App.css";
import CakeView from "./feautures/cake/CakeView";
import IceCreamView from "./feautures/icecream/IceCreamView";
import UserView from "./feautures/user/UserView";
function App() {
  const [count, setCount] = useState("");
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
