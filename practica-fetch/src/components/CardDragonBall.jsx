import React from "react";

// El componente DragonBallCard recibe un objeto character como prop y lo desestructura para obtener sus propiedades
const DragonBallCard = ({ character }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
            <img
                className="h-64 object-cover mx-auto"
                src={character.image}
                alt={character.name}
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 text-gray-800">{character.name}</h2> {/* Usar name en lugar de description si es el nombre */}
                <p className="text-gray-600 text-sm mb-4">{character.description || 'No description available'}</p> {/* Validación para description */}
                <div className="text-gray-700 text-sm">
                    <p>
                        <span className="font-semibold">Race:</span> {character.race || 'Unknown'}
                    </p>
                    <p>
                        <span className="font-semibold">Gender:</span> {character.gender || 'Unknown'}
                    </p>
                    <p>
                        <span className="font-semibold">Ki:</span> {character.ki || 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold">Max Ki:</span> {character.maxki || 'N/A'}
                    </p>
                    <p>
                        <span className="font-semibold">Affiliation:</span> {character.affiliation || 'Unknown'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DragonBallCard;
