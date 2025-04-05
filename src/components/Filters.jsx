import React from "react";
import "../scss/Filters.scss";

function Filters({ onNameFilter, onSpeciesFilter  }) {
    const handleChange = (e) => {
        const value = e.target.value;
        onNameFilter(value);
    };

    return (
        <section className="search">
            <form className="form" action="form">
                <input className="form__input"
                    type="text"
                    onChange={handleChange}
                    placeholder="Buscar personaje"
                />
                <label>
                    <input className="form__checkbox"
                        type="checkbox"
                        name="species"
                        value="human"
                        onChange={onSpeciesFilter}
                    />
                    Human
                    </label>

                    <label>
                    <input className="form__checkbox"
                        type="checkbox"
                        name="species"
                        value="alien"
                        onChange={onSpeciesFilter}
                    />
                    Alien
                    </label>
            </form>
        </section>
    );
}

export default Filters;
