import React,{ useState } from "react";

function GifSearch({ onSearch }) {
    const [search, setSearch] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(search)
    }


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="search">Enter a Search Term:</label>
            <input
            id="search"
            className="form-control"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            >
            </input>
            </div>
            <button type="submit" className="btn btn-success">
                Find Gifs
            </button>
        </form>
        </div>
    )
}

export default GifSearch