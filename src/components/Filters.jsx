import React from "react";

function Filters({ onNameFilter }) {
    const handleChange = (e) => {
        const value = e.target.value;
        onNameFilter(value);
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Buscar personaje"
                />
            </form>
        </div>
    );
}

export default Filters;
