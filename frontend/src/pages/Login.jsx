import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import User from "@context/User";

function Login() {
  const [connexion, setConnexion] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userContext = useContext(User.UserContext);

  const handleSubmit = () => {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (
      emailPattern.test(connexion.email) &&
      pwdPattern.test(connexion.password)
    ) {
      apiConnexion
        .post("/login", { ...connexion })
        .then((res) => {
          navigate("/players");
          userContext.handleUser(res.data);
        })
        .catch((err) => {
          setMessage(err.response.data.msg);
          console.error(err);
        });
    } else {
      setMessage("Invalid credentials");
    }
  };

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
            <p>{message}</p>
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
              onClick={handleSubmit}
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
