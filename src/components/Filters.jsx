import React from "react";
import "../scss/Filters.scss";

function Filters({ onNameFilter }) {
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
            </form>
        </section>
    );
}

export default Filters;
