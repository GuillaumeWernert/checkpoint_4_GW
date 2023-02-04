import React from "react";

function Player() {
  return (
    <div>
      <h1 className="text-center font-bold object-center">NOM Prénom</h1>
      <div className="mb-5 md:flex">
        <img
          className="w-11/12 flex m-auto md:w-6/12 md:ml-2"
          src="\src\assets\arsene1.jpg"
          alt="arsène"
        />
        <div className="md:w-full md:ml-2">
          <h3 className="text-center font-bold object-center">
            Caractéristiques
          </h3>
          <div className="ml-2 md:h-5/6 md:ml-2 md:mt-3 md:w-full md:flex md:flex-col md:justify-between">
            <p className="">Nom:</p>
            <p className="">Prénom:</p>
            <p className="">Date de naissance:</p>
            <p className="">Age:</p>
            <p className="">Poste favoris:</p>
            <p className="">Pied favoris:</p>
            <p className="">Numéro de téléphone:</p>
            <p className="">Adresse email:</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          className="w-1/4 bg-zinc-900 text-gray-50 rounded-lg"
        >
          Supprimer
        </button>
        <button
          type="button"
          className="w-1/4 bg-zinc-900 text-gray-50 rounded-lg ml-5 mr-2"
        >
          Modifier
        </button>
      </div>
    </div>
  );
}

export default Player;
