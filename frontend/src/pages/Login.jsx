import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [connexion, setConnexion] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen">
      <div className="w-32 m-auto">
        <img src="\src\assets\logo_fcd.jpg" alt="Logo" />
      </div>
      <h1 className="flex justify-center font-bold text-4xl pt-16 py-8">
        Connexion
      </h1>
      <div className="flex justify-center card rounded-none ml-8">
        <form>
          <div className="group">
            <input
              className="mb-5 mr-5 pl-3 border-2 border-[#e7ebec] w-screen rounded-lg outline-[#ced7da] text-lg md:w-full"
              id="email-address"
              name="email"
              type="email"
              value={connexion.email}
              onChange={(e) =>
                setConnexion({ ...connexion, email: e.target.value })
              }
              autoComplete="email"
              required
              placeholder="Adresse email"
            />
          </div>
          <div className="w-full">
            <input
              className=" mb-8 pl-3 border-2 border-[#e7ebec] w-screen rounded-lg outline-[#ced7da] text-lg mr-3 md:w-full"
              id="password"
              name="password"
              type="password"
              value={connexion.password}
              onChange={(e) =>
                setConnexion({ ...connexion, password: e.target.value })
              }
              autoComplete="current-password"
              required
              placeholder="Mot de passe"
            />
            <div />
          </div>
          <div className="w-full flex justify-evenly">
            <Link
              to="/home"
              className="dark:text-[#000000] bg-[#909699] rounded-xl px-5 py-2 text-ml font-semibold"
            >
              Annuler
            </Link>

            <button
              className="text-white bg-[#000000] rounded-xl px-5 py-2 text-ml font-semibold"
              type="button"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
