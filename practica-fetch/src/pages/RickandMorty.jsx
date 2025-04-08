import React, { useState, useEffect } from "react";
import axios from "axios"; // Importamos axios
import CardRickandMorty from "../components/CardRickandMorty"; // Importamos el componente de la tarjeta

const RickandMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Cargando...</div>;
  }

  if (characters.length === 0) {
    return <div>No hay personajes disponibles.</div>;
  }

  return (
    <div className="p-4">
      {/* Título centrado como encabezado */}
      <h1 className="text-4xl font-extrabold text-center py-4">
        Personajes de Rick and Morty
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CardRickandMorty key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default RickandMorty;
