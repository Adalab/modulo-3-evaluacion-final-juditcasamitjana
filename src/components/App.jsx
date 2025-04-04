import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import CharacterDetail from "./CharacterDetail";
import RickAndMorty from "./RickAndMorty";

function App() {
    return (
        <Routes>
            <Route path="/" element={<RickAndMorty />} />
            <Route path="/detail/:id" element={<CharacterDetail />} />
        </Routes>
    );
}

export default App;
