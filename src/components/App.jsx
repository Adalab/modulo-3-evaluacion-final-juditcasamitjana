import { Route, Routes } from "react-router-dom";
import "../scss/App.scss";
import CharacterDetail from "./CharacterDetail";
import logo from "../images/Rick_and_Morty_title_card.png";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <h1>Evaluación Final React </h1>
                        <img
                            src={logo}
                            alt="Rick and Morty Logo"
                            className="logo"
                        />
                    </div>
                }
            />
            <Route path="/detail/:id" element={<CharacterDetail />} />
        </Routes>
    );
}

export default App;
