import { Route, Routes } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import Header from "./Header";
import CharacterList from "./CharacterList";
import "../scss/App.scss";

function App() {
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

    const filteredCharacters = characters.filter((character) => {
        return character.name
            .toLowerCase()
            .includes(nameFilter.toLocaleLowerCase());
    });

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Filters onNameFilter={handleNameFilter} />
                                <CharacterList
                                    characters={filteredCharacters}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/detail/:id"
                        element={<CharacterDetail characters={characters} />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
