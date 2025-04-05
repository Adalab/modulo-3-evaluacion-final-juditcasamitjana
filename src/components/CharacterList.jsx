import React from "react";
import CharacterCard from "./CharacterCard";
import "../scss/CharacterList.scss";

function CharacterList({ characters }) {
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
