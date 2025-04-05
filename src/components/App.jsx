import { Link, Route, Routes } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import Header from "./Header";
import CharacterList from "./CharacterList";
import "../scss/App.scss";

function App() {
    const [nameFilter, setNameFilter] = useState("");
    const [characters, setCharacters] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState([]);

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
                            episodes: result.episode.length
                        };
                    })
                );
            });
    }, []);

    const handleNameFilter = (nameFilter) => {
        setNameFilter(nameFilter);
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedSpecies([...selectedSpecies, value]);
        } else {
            setSelectedSpecies(selectedSpecies.filter((species) => species !== value));
        }
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
                                <Filters onNameFilter={handleNameFilter} onSpeciesFilter={handleCheckboxChange}/>
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
                            <Link className="back" to={"/"}>&lt; Volver</Link>
                            <CharacterDetail characters={characters} />
                        </>}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
