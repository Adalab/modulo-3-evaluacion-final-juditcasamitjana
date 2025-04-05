import React from "react";
import CharacterCard from "./CharacterCard";
import "../scss/CharacterList.scss";

function CharacterList({ characters }) {
    if(characters.length === 0) {
        return <p className="list--empty">No hay ningún personaje que coincida con tu búsqueda</p>
    }

    return (
        <ul className="list">
            {characters.map((character) => {
                return (
                    <CharacterCard character={character} key={character.id} />
                );
            })}
        </ul>
    );
}

export default CharacterList;
