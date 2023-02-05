import React, { useState } from "react";
import validatePlayer from "@services/players";
import apiConnexion from "@services/apiConnexion";

function Administration() {
  const [player, setPlayer] = useState({
    lastName: "",
    firstName: "",
    p_age: "",
    phone_num: "",
    password: "",
    email: "",
    p_position_id: "",
    foot_id: "",
    user_status_id: "",
  });

  const [message, setMessage] = useState("");

  const handlePlayer = (position, value) => {
    const newPlayer = { ...player };
    newPlayer[position] = value;
    setPlayer(newPlayer);
  };

  const sendForm = (e) => {
    e.preventDefault();
    const { status, errorMessage } = validatePlayer(player);
    if (status) {
      apiConnexion
        .post("/players", player)
        .then(() => {
          setMessage("player succesfully added");
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      setMessage(errorMessage);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-4 text-center">Administration</h1>
      <form onSubmit={(e) => sendForm(e)}>
        <h2 className="text-2xl mb-4 text-center">Ajout d'un nouveau joueur</h2>
        <div className="flex flex-wrap justify-evenly gap-5 mb-4">
          <label className="w-[40%] flex flex-col text-2xl">
            Nom :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="lastName"
              value={player.lastName}
              placeholder="Nom"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-2xl">
            Prénom :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="firstName"
              value={player.firstName}
              placeholder="Prénom"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-2xl">
            Age :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="p_age"
              value={player.p_age}
              placeholder="Age"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-2xl">
            Numéro de téléphone :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="phone_num"
              value={player.phone_num}
              placeholder="Numéro de téléphone"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-2xl">
            Email :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="email"
              value={player.email}
              placeholder="Email"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-2xl">
            Mot de passe :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="password"
              value={player.password}
              placeholder="Mot de passe"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-2xl">
            Poste :
            <input
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="p_position_id"
              value={player.p_position_id}
              placeholder="Poste"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[90%] flex flex-col text-2xl">
            Pied fort :
            <textarea
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="foot_id"
              value={player.foot_id}
              placeholder="Pied fort"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
          <label className="w-[90%] flex flex-col text-2xl">
            Statut :
            <textarea
              required
              className=" bg-slate-300 placeholder-black p-2 rounded-3xl"
              type="text"
              name="user_status_id"
              value={player.user_status_id}
              placeholder="Statut"
              onChange={(e) => handlePlayer(e.target.name, e.target.value)}
            />
          </label>
        </div>
        <button className=" justify-self-center" type="submit">
          Envoyer
        </button>
        <h3 className=" text-red-700">{message}</h3>
      </form>
    </div>
  );
}

export default Administration;
