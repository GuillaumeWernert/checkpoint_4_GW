import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Players from "@pages/Players";
import Administration from "@pages/Administration";
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
        <Route path="/login" element={<Login />} />
        <Route path="players" element={<Players />} />
        <Route path="administration" element={<Administration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
