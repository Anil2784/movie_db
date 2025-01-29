import axios from '../axios';
let Api_key = "c45a857c193f6302f2b5061c3b85e743";

export const getAllMovies = (page) => {
  return (dispatch) => {
    axios
      .get(`movie/popular?api_key=${Api_key}&language=en-US&page=${page}`)
      .then((response) => {
        dispatch({ type: 'get_all_movies', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching all movies:', error);
        dispatch({
          type: 'MOVIE_API_ERROR',
          payload: 'Error fetching all movies',
        });
      });
  };
};

export const findByMovieDetails = (movie_id) => {
  return (dispatch) => {
    
    axios
      .get(`movie/${movie_id}?api_key=${Api_key}&language=en-US`)
      .then((response) => {
        // console.log(response);
        
        dispatch({ type: 'find_by_movies_details', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        dispatch({
          type: 'MOVIE_API_ERROR',
          payload: `Error fetching details for movie ID: ${movie_id}`,
        });
      });
  };
};

export const findByMovieCastDetails = (movie_id) => {
  return (dispatch) => {
    axios
      .get(`movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`)
      .then((response) => {
        dispatch({ type: 'find_by_movie_cast_details', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching movie cast details:', error);
        dispatch({
          type: 'MOVIE_API_ERROR',
          payload: `Error fetching cast for movie ID: ${movie_id}`,
        });
      });
  };
};

export const getUpcomingMovies = (page) => {
  return (dispatch) => {
    axios
      .get(`movie/upcoming?api_key=${Api_key}&language=en-US&page=${page}`)
      .then((response) => {
        dispatch({ type: 'get_upcoming_movies', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching upcoming movies:', error);
        dispatch({
          type: 'MOVIE_API_ERROR',
          payload: 'Error fetching upcoming movies',
        });
      });
  };
};

export const getTopRatedMovies = (page) => {
  return (dispatch) => {
    axios
      .get(`movie/top_rated?api_key=${Api_key}&language=en-US&page=${page}`)
      .then((response) => {
        dispatch({ type: 'get_top_rated_movies', payload: response.data });
      })
      .catch((error) => {
        console.error('Error fetching top-rated movies:', error);
        dispatch({
          type: 'MOVIE_API_ERROR',
          payload: 'Error fetching top-rated movies',
        });
      });
  };
};

export const searchByMovieName = (movie_name,page) => {
  return (dispatch) => {
    axios
      .get(`search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=${page}`)
      .then((response) => {
        dispatch({ type: 'search_by_movie_name', payload: response.data });
      })
      .catch((error) => {
        console.error('Error searching by movie name:', error);
        dispatch({
          type: 'MOVIE_API_ERROR',
          payload: `Error searching for movie: ${movie_name}`,
        });
      });
  };
};