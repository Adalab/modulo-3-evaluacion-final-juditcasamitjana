import React from "react";
import { Link } from "react-router-dom";
import "../scss/CharacterCard.scss";

function CharacterCard({ character }) {
    return (
        <li className="card">
            <Link to={`/detail/${character.id}`}>
                <section>
                    <img className="card__image" src={character.image} alt={character.name} />
                </section>
                <section className="card__character">
                    <h1>{character.name}</h1>
                    <p>{character.species}</p>
                    <p>{character.status}</p>
                </section>                
            </Link>
        </li>
    );
}

export default CharacterCard;
