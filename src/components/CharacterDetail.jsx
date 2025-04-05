import React from "react";
import { useParams } from "react-router-dom";
import "../scss/CharacterDetail.scss";

function CharacterDetail({ characters }) {
    const { id } = useParams();

    const character = characters.find(
        (character) => character.id === parseInt(id)
    );

    if (!character) {
        return <div>No se encuentra</div>;
    }

    return (
        <div className="container">
            <section className="detail">
                <img className="detail__image" src={character.image} alt={character.name} />
            </section>
            <section className="detail__character">
                <h1>{character.name}</h1>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Origin: {character.origin}</p>
                <p>Episodes: {character.episodes}</p>
            </section>            
        </div>
    );
}

export default CharacterDetail;
