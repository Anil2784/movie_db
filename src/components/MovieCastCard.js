import React from 'react';
import './MovieCastCard.css';  // Optional for styling

const MovieCastCard = ({ movie_cast }) => {
    const { cast } = movie_cast

    return (
        <div className="movie-cast-card">
            <h3>Cast ({cast.length})</h3>
            <div className="cast-list">
                {cast.length > 0 ? (
                    cast.map((actor) => (
                        <div key={actor.id} className="cast-member">
                            {actor.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                    alt={actor.name}
                                    className="actor-image"
                                />
                            ) : (
                                <div className="no-image">No Image</div> // Placeholder for missing profile images
                            )}
                            <p>{actor.name}</p>
                            <p><em>{actor.character}</em></p> {/* Character they play in the movie */}
                        </div>
                    ))
                ) : (
                    <p>No cast information available.</p>
                )}
            </div>
        </div>
        
    );
};

export default MovieCastCard;
