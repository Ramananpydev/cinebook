import React from 'react'
import './movielist.css'

function Movielist({ val }) {
  return (
    <div>


    <div className="movie-card">
        <img src={val.image} alt={val.heading} />
      <h3>{val.heading}</h3>
      <p>{val.p}</p>
    </div>
    </div>
  )
}

export default Movielist
