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
      <form className="w-full" onSubmit={(e) => sendForm(e)}>
        <h2 className="text-2xl mb-4 text-center">Ajout d'un nouveau joueur</h2>
        <div>
          <h1 className="text-center font-bold object-center mb-5">
            NOM: {player.lastName} {player.firstName}
          </h1>
          <div className="mb-5 md:flex">
            <img
              className="w-11/12 flex m-auto md:w-6/12 md:ml-2 rounded-tl-3xl"
              src="\src\assets\arsene1.jpg"
              alt="arsène"
            />
            <div className="md:w-full md:ml-2">
              <h3 className="text-center font-bold object-center mb-5 mt-2">
                Caractéristiques
              </h3>
              <div className="ml-2 md:h-5/6 md:ml-2 md:mt-3 md:w-full md:flex md:flex-col md:justify-between">
                <label className="flex justify-between w-full mb-2">
                  Nom:
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="lastName"
                    value={player.lastName}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
                <label className="flex justify-between mb-2">
                  Prénom :
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="firstName"
                    value={player.firstName}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
                <label className="flex justify-between mb-2">
                  Age :
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="p_age"
                    value={player.p_age}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
                <label className="flex justify-between mb-2">
                  Email :
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="email"
                    value={player.email}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
                <label className="flex justify-between mb-2">
                  Téléphone :
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="phone_num"
                    value={player.phone_num}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
                <label className="flex justify-between mb-2">
                  Pied fort :
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="foot_id"
                    value={player.foot_id}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
                <label className="flex justify-between mb-2">
                  Poste :
                  <input
                    required
                    className=" bg-slate-300 placeholder-black p-2 rounded-3xl h-8 w-8/12 mr-2"
                    type="text"
                    name="p_position_id"
                    value={player.p_position_id}
                    onChange={(e) =>
                      handlePlayer(e.target.name, e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="w-1/4 bg-zinc-900 text-gray-50 rounded-lg"
            >
              Supprimer
            </button>
            <button
              type="submit"
              className="w-1/4 bg-zinc-900 text-gray-50 rounded-lg ml-5 mr-2"
            >
              Modifier
            </button>
            <button
              className=" w-1/4 bg-zinc-900 text-gray-50 rounded-lg ml-5 mr-2"
              type="submit"
            >
              Envoyer
            </button>
            <h3 className=" text-red-700">{message}</h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Administration;
