// TopRatedMovie

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getTopRatedMovies } from '../actions/movies.action';
import MovieCard from '../components/MovieCard';  // Import the MovieCard component
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

function TopRatedMovie() {
  const dispatch = useDispatch();

  const { topRatedMovies, error, loading } = useSelector((state) => state.movie);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Display 10 movies per page

  useEffect(() => {
    dispatch(getTopRatedMovies(currentPage));
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="home">
      <h2>Top Rated Movies</h2>
      <div className="movie-list">
        {topRatedMovies && topRatedMovies.results && topRatedMovies?.results?.map((movie) => (
          <Link key={movie.id} to={`/movie/details/${movie.id}`}>
            <MovieCard movie_details={movie} />
          </Link>
        ))}
      </div>
      <Pagination
        totalItems={topRatedMovies?.total_results}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default TopRatedMovie;
