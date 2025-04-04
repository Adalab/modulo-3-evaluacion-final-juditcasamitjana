import React from "react";

function CharacterCard({ character }) {
    return (
        <li>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
            <p>{character.name}</p>
            <p>{character.species}</p>
        </li>
    );
}

export default CharacterCard;
