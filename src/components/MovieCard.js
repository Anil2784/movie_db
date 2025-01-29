import React from 'react';
import './MovieCard.css';  // Import the CSS file for styling

function MovieCard({ movie_details }) {
  const { title, poster_path, vote_average,id } = movie_details;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;  // Construct the full poster image URL

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} className="movie-card-img" />
      <div className="movie-card-details">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-rating">Rating: {vote_average}</p>
        <p className="movie-card-rating">id: {id}</p>
      </div>
    </div>
  );
}

export default MovieCard;
