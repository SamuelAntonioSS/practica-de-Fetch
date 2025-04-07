import { useState, useEffect } from "react";
import DragonBallCard from '../components/CardDragonBall'

const DragonBall = () => {

  const apiUrl = 'https://dragonball-api.com/api/characters';
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // código para cargar los personajes de la API
  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setCharacters(data.items);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  // código para cargar los personajes al iniciar la página
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1 className='text-center text-2xl'>Personajes</h1> {/* Cambio aquí */}
      {loading ? (
        <p>Cargando personajes...</p>  /* Asegúrate de corregir la palabra "persoanjes" a "personajes" */
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <DragonBallCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DragonBall;
