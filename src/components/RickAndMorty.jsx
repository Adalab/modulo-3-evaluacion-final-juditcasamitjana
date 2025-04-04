import React, { useEffect, useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

function RickAndMorty() {
    const [nameFilter, setNameFilter] = useState("");
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((data) => data.json())
            .then((data) => {
                setCharacters(
                    data.results.map((result) => {
                        return {
                            id: result.id,
                            image: result.image,
                            name: result.name,
                            species: result.species,
                            status: result.status,
                        };
                    })
                );
            });
    }, []);

    const handleNameFilter = (nameFilter) => {
        setNameFilter(nameFilter);
    };

    return (
        <>
            <Header />
            <Filters onNameFilter={handleNameFilter} />
            <CharacterList characters={characters} />
        </>
    );
}

export default RickAndMorty;
