import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SongDisplay from "./components/songs/SongShowcase";
import AlbumDisplay from "./components/albums/AlbumShowcase";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumDisplay />} />
        <Route path="/songs" element={<SongDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
