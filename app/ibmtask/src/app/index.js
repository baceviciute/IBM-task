import React from 'react';
import './App.css';
import CurrentShows from "./components/CurrentShow";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="base-container">
        <Navbar />
        <CurrentShows />
      </div>
    </div>
  );
}

export default App;
