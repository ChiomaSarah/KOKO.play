import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SongDisplay from "./components/songs/SongShowcase";
import AlbumDisplay from "./components/albums/AlbumShowcase";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/albums" component={AlbumDisplay} />

        <Route path="/songs" component={SongDisplay} />
      </Switch>
    </Router>
  );
}

export default App;
