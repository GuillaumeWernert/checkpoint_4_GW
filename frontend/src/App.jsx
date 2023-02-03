import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Players from "@pages/Players";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="players" element={<Players />} />
      </Routes>
    </Router>
  );
}

export default App;
