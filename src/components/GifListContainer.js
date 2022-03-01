import { getConfig } from "@testing-library/react";
import React, { useState } from "react";
import { getFID } from "web-vitals";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("dolphins")

    function handleSubmit() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=qtJXccNxBOaYpWLHASba64hxE7xd50UT&rating=g`)
        .then((res) => res.json())
        .then(({data}) =>  {
           const gifs = data.map((gif) => ({url: gif.images.original.url}))
            setGifs(gifs)
            })
        }

    return (
        <div style={{display: "flex"}}>
            <GifSearch setSearch={setSearch}/>
            <GifList gifs={gifs}/>
        </div>
    )
}

export default GifListContainer