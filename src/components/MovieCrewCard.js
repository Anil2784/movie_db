import React from 'react';
import './MovieCastCard.css';  // Optional for styling

const MovieCrewCard = ({ movie_cast }) => {
    const { crew } = movie_cast

    return (
        <div className="movie-cast-card">
            <h3>Crew ({crew.length})</h3>
            <div className="cast-list">
                {crew.length > 0 ? (
                    crew.map((member,index) => (
                        <div key={index} className="cast-member">
                            {member.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                                    alt={member.name}
                                    className="actor-image"
                                />
                            ) : (
                                <div className="no-image">No Image</div> // Placeholder for missing profile images
                            )}
                            <p>{member.name}</p>

                            <p><em>{member.department}-{member.job}</em></p>
                        </div>
                    ))
                ) : (
                    <p>No cast information available.</p>
                )}
            </div>
        </div>
    );
};

export default MovieCrewCard;
