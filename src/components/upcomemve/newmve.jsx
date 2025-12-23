import { useParams } from "react-router-dom";
import { useState } from "react";
import "./newmve.css";

const movies = [
  {
    id: "1",
    title: "Avatar: Fire and Ash",
    rating: "8.1/10",
    votes: "46.9K Votes",
    duration: "3h 17m",
    genre: "Action, Adventure, Fantasy, Sci-Fi",
    censor: "UA16+",
    release: "19 Dec, 2025",
    formats: "2D, ICE 3D, 4DX 3D, MX4D",
    languages: "English, Hindi +4",
    poster: "/Avatar.jpg",
    banner: "/avatarbanner.jpg",
  },
];

function Newmve() {
  const initial=[ 'YES Private Debit Card Offer']
  const[offer,setOffer]=useState(initial)
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie){
    return <h2>Movie not found</h2>; 
  } 

  return (
    <div
      className="movie-banner"
      style={{ backgroundImage: `url(${movie.banner})` }}
    >
      <div className="overlay">
        <div className="movie-content">
          <img src={movie.poster} className="poster" />

          <div className="details">
            <h1>{movie.title}</h1>

            <div className="rating">
              <i class="fa-solid fa-star" ></i> {movie.rating}
              <span>({movie.votes})</span>
              <button className="rate-btn">Rate now</button>
            </div>

            <p className="meta">
              {movie.duration} • {movie.genre} • {movie.censor} •{" "}
              {movie.release}
            </p>

            <div className="tags">
              <span>{movie.formats}</span>
              <span>{movie.languages}</span>
            </div>

            <button className="book-btn">Book tickets</button>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>About the movie</h3>
        <p className="abp">The biggest film in the world, the ultimate cinematic experience and spectacle, goes even bigger with Avatar: <span>Fire and Ash. In the aftermath of great loss, Jake Sully and Neytiri confront a new and dangerous force on Pandora.</span> <span>As tensions rise, their family`s strength and unity are tested like never before.</span></p>
      </div>
      <div className="top-offer">
        <h3>Top offers for you</h3>
        <div className="offer">

          <p className="offer-text">{offer}</p>
        <button onClick={()=>setOffer(initial)} className="btns"> ❮</button>
        <button onClick={()=>setOffer('Buy One and Get One Movie ticket free')} className="btns">❯</button>
        </div>

      </div>
    </div>
  );
}

export default Newmve;
