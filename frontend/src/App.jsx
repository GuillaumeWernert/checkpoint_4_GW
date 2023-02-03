import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Players from "@pages/Players";
import Player from "@pages/Player";
import Home from "@pages/Home";
import Footer from "@components/Footer";
import Login from "@pages/Login";

import "./App.css";
import NavBar from "@components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="players" element={<Players />} />
        <Route path="player" element={<Player />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
