import { Link, Route, Routes } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import Header from "./Header";
import CharacterList from "./CharacterList";
import "../scss/App.scss";
import localStorageService from "../services/localStorage";

function App() {
    const [nameFilter, setNameFilter] = useState(
        localStorageService.get("nameFilter", "")
    );
    const [characters, setCharacters] = useState([]);
    const [speciesFilter, setSpeciesFilter] = useState(
        localStorageService.get("speciesFilter", "all")
    );

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
                            origin: result.origin.name,
                            episodes: result.episode.length,
                        };
                    })
                );
            });
    }, []);

    const handleNameFilter = (nameFilter) => {
        setNameFilter(nameFilter);
        localStorageService.set("nameFilter", nameFilter);
    };

    const handleSpeciesFilter = (speciesFilter) => {
        setSpeciesFilter(speciesFilter);
        localStorageService.set("speciesFilter", speciesFilter);
    };

    const filteredCharacters = characters
        .filter((character) => {
            if (speciesFilter === "all") {
                return true;
            }

            return character.species.toLowerCase() === speciesFilter;
        })
        .filter((character) => {
            return character.name
                .toLowerCase()
                .includes(nameFilter.toLocaleLowerCase());
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Filters
                                    onNameFilter={handleNameFilter}
                                    onSpeciesFilter={handleSpeciesFilter}
                                    nameFilter={nameFilter}
                                    speciesFilter={speciesFilter}
                                />
                                <CharacterList
                                    characters={filteredCharacters}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={
                            <>
                                <Link className="back" to={"/"}>
                                    &lt; Volver
                                </Link>
                                <CharacterDetail characters={characters} />
                            </>
                        }
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
