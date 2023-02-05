import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="h-20 flex ">
      <Link to="/home">
        <img className="h-16 mr-10" src="\src\assets\logo_fcd.jpg" alt="logo" />
      </Link>
      <Link to="/players">Listes des joueurs</Link>
      <Link to="/administration">Administration</Link>
      <Link to="/Login">Connexion</Link>
    </nav>
  );
}

export default NavBar;
