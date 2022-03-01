import React from "react";

function GifList({ gifs }) {
    const displayedGifs = gifs.map((gif) => {
       return (
        <li key={gif.url}> 
          <img src={gif.url} alt="gif"></img>
        </li>
       )
    })

    return (
        <ul>
            {displayedGifs}
        </ul>
    )
}

export default GifList