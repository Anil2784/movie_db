import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../actions/movies.action';
import MovieCard from '../components/MovieCard';  // Import the MovieCard component
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

function Home() {
  const dispatch = useDispatch();

  const { movies, error, loading } = useSelector((state) => state.movie);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Display 10 movies per page

  useEffect(() => {
    dispatch(getAllMovies(currentPage));
  }, [currentPage]);


  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="home">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {movies && movies.results && movies?.results?.map((movie) => (
          <Link key={movie.id} to={`/movie/details/${movie.id}`}>
            <MovieCard movie_details={movie} />
          </Link>
        ))}
      </div>
      <Pagination
        totalItems={10000}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
