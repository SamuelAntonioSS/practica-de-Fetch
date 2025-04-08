import React from "react";

const CardRickandMorty = ({ character }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={character.image}
        alt={character.name}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{character.name}</h2>
        <p className="text-gray-700 text-base">Status: {character.status}</p>
        <p className="text-gray-700 text-base">Species: {character.species}</p>
      </div>
    </div>
  );
};

export default CardRickandMorty;
