import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiConnexion from "../services/apiConnexion";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiConnexion
      .get(`/players/${id}`)
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold">LES JOUEURS</h1>
      <div className="players" />
      <div className="player1 mb-5 md:flex">
        <img
          className="md:w-6/12 md:ml-2 rounded-3xl"
          src="\src\assets\arsene1.jpg"
          alt="arsène"
        />
        <div className="caract md:ml-2 md:w-full md:flex md:flex-col md:justify-between">
          <p className="underline">Nom:{players.lastName}</p>
          <p className="underline">Prénom:{players.firstName}</p>
          <p className="underline">Age:{players.age}</p>
          <p className="underline">Poste favoris:{players.p_position_id}</p>
          <p className="underline">Pied favoris:{players.foot_id}</p>
        </div>
      </div>
    </div>
  );
}

export default AllPlayers;
