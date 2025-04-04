import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
    return (
        <ul>
            {characters.map((character) => {
                return (
                    <CharacterCard character={character} key={character.id} />
                );
            })}
        </ul>
    );
}

export default CharacterList;
