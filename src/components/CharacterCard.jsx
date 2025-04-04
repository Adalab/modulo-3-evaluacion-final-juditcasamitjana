import React from "react";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
    return (
        <li>
            <Link to={`/detail/${character.id}`}>
                <div>
                    <img src={character.image} alt={character.name} />
                </div>
                <p>{character.name}</p>
                <p>{character.species}</p>
                <p>{character.status}</p>
            </Link>
        </li>
    );
}

export default CharacterCard;
