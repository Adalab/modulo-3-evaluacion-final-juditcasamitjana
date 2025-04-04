import React from "react";
import { useParams } from "react-router-dom";

function CharacterDetail({ characters }) {
    const { id } = useParams();

    const character = characters.find(
        (character) => character.id === parseInt(id)
    );

    if (!character) {
        return <div>No se encuentra</div>;
    }

    return (
        <div>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
            <p>{character.name}</p>
            <p>{character.species}</p>
            <p>{character.status}</p>
        </div>
    );
}

export default CharacterDetail;
