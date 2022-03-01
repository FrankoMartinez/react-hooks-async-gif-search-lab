import React from "react";

function GifSearch({setSearch }) {
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter search"
            onChange={(e) => setSearch(e.target.value)}
            >
            </input>
        </form>
    )
}

export default GifSearch