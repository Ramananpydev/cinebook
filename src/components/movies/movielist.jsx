import React from 'react'
import { useNavigate } from "react-router-dom";
import './movielist.css'

function Movielist({ val }) {
    const navigate = useNavigate();
  return (
    <div>


    <div className="movie-card" onClick={() => navigate(`/movie/${val.id}`)}>
        <img src={val.image} alt={val.heading} />
      <h3>{val.heading}</h3>
      <p>{val.p}</p>
    </div>
    </div>
  )
}

export default Movielist
