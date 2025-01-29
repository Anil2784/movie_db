import React from 'react';
import './MovieDetailsCard.css';  // Optional for styling

const MovieDetailsCard = ({ movie_details }) => {
  const { 
    original_title, 
    overview, 
    release_date, 
    vote_average, 
    backdrop_path, 
    genre_ids, 
    adult, 
    poster_path, 
    title 
  } = movie_details;

  // Genre IDs to names mapping (expand as needed)
  const genreMapping = {
    28: "Action",
    878: "Science Fiction",
    12: "Adventure",
    // Add more genres as necessary
  };

  const genres = Array.isArray(genre_ids) ? genre_ids.map(id => genreMapping[id] || "Unknown") : [];

  return (
    <div className="movie-details-card">
      {/* Backdrop Image with Overlay */}
      <div className="movie-backdrop-container">
        {backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={original_title}
            className="movie-backdrop"
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
        <div className="backdrop-overlay"></div>
      </div>

      <div className="movie-info-container">
        {/* Poster Image */}
        <div className="movie-poster-wrapper">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
              className="movie-poster"
            />
          ) : (
            <div className="no-image">No Poster Available</div>
          )}
        </div>

        {/* Movie Details */}
        <div className="movie-info">
          <h2>{original_title || title || "Untitled Movie"}</h2>
          <p><strong>Release Date:</strong> {release_date || "Unknown"}</p>
          <p><strong>Rating:</strong> {vote_average ? `${vote_average}/10` : "No Rating"}</p>
          <p><strong>Genres:</strong> {genres.join(", ")}</p>
          <p><strong>Adult Content:</strong> {adult ? "Yes" : "No"}</p>
        </div>
      </div>

      {/* Movie Overview */}
      <div className="movie-description">
        <h3>Overview:</h3>
        <p>{overview || "No overview available."}</p>
      </div>

    </div>
  );
};

export default MovieDetailsCard;
