import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden sm:h-20 sm:flex sm:justify-between sm:items-center bg-black">
        <Link to="/">
          <img
            className="h-16 mr-10 rounded-full ml-5"
            src="\src\assets\logo_fcd.jpg"
            alt="logo"
          />
        </Link>
        <Link to="/players" className="text-gray-300">
          Listes des joueurs
        </Link>
        <Link to="/administration" className="text-gray-300">
          Administration
        </Link>
        <Link to="/Login" className="text-gray-300 mr-5">
          Connexion
        </Link>
      </div>
      <div className="sm:hidden relative flex justify-between mr-1 bg-black w-full">
        <Link to="/home">
          <img
            className="h-16 mr-10 rounded-full"
            src="\src\assets\logo_fcd.jpg"
            alt="logo"
          />
        </Link>
        <button
          className="p-4 space-y-2"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-gray-50 rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-gray-50 rounded-md`}
          />
          <span
            className={`${
              isOpen ? "hidden" : "block"
            } block w-8 h-1 bg-gray-50 rounded-md`}
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-full z-40 bg-white`}
        >
          <div className="relative w-full bg-zinc-900 rounded-b-xl">
            <button
              className="absolute right-0 mr-4 mt-4 hover:text-gray-50 text-gray-300 text-2xl font-bold"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              X
            </button>
            <div className="p-10">
              <Link to="/home">
                <p className="text-xl font-bold py-2 text-gray-300 hover:text-gray-50">
                  Accueil
                </p>
              </Link>
              <Link to="/home">
                <p className="text-xl font-bold py-2 text-gray-300 hover:text-gray-50">
                  Liste des joueurs
                </p>
              </Link>
              <Link to="/players">
                <p className="text-xl font-bold py-2 text-gray-300 hover:text-gray-50">
                  Connexion
                </p>
              </Link>
              <Link to="/archives">
                <p className="text-xl font-bold py-2 text-gray-300 hover:text-gray-50">
                  Administration
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
