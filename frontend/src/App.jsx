import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Players from "@pages/Players";
import Player from "@pages/Player";
import Home from "@pages/Home";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="players" element={<Players />} />
        <Route path="player" element={<Player />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
