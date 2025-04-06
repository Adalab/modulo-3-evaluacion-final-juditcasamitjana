import React from "react";
import "../scss/Filters.scss";

function Filters({ onNameFilter, onSpeciesFilter }) {
    const handleChange = (e) => {
        const value = e.target.value;
        onNameFilter(value);
    };

    const handleChangeSpecies = (e) => {
        const value = e.target.value;
        onSpeciesFilter(value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="search">
            <form className="form" action="form" onSubmit={handleOnSubmit}>
                <input className="form__input"
                    type="text"
                    onChange={handleChange}
                    placeholder="Busca por personaje"
                />
                <label htmlFor="species">Busca por especie</label>
                <select className="form__select" onChange={handleChangeSpecies}>
                    <option value="all">Todas las especies</option>
                    <option value="alien">Alien</option>
                    <option value="human">Humano</option>
                    </select>                                
            </form>
        </section>
    );
}

export default Filters;
