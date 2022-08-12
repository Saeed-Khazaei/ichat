import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Chats from "./pages/Chats";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/chats" component={Chats} />
    </div>
  );
}

export default App;
