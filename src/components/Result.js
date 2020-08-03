import React from "react"

function Result( {result, openPopup } ) {
    return (
        <div className = "result" onClick = {() => openPopup(result.imdbID)}>
            <img src = {result.Poster} alt = "poster" />
            <h3> {result.Title}</h3>
            <h4>IMDB:{result.imdbID}</h4>
        </div>
    )
}

export default Result;