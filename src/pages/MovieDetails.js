import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findByMovieCastDetails, findByMovieDetails } from '../actions/movies.action';

import MovieDetailsCard from '../components/MovieDetailsCard';  // Import MovieDetailsCard
import { useParams } from 'react-router-dom';
import MovieCastCard from '../components/MovieCastCard';
import MovieCrewCard from '../components/MovieCrewCard';

function MovieDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movieDetails,movieCast, error, loading } = useSelector((state) => state.movie);
    // console.log(movieDetails,"movieDetails");
    
    useEffect(() => {

        dispatch(findByMovieDetails(id));
        dispatch(findByMovieCastDetails(id));

    }, [dispatch]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className="home">
            <h2>Popular Movies Details</h2>

          {
            movieDetails && <MovieDetailsCard movie_details={movieDetails} />
          } 
           {
            movieCast && <MovieCastCard movie_cast={movieCast} />
           }
           {
            movieCast && <MovieCrewCard movie_cast={movieCast} />
           }
        </div>
    );
}

export default MovieDetails;
