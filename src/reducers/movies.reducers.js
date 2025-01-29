const initialState = {
  movies: [],
  movieDetails: null,
  movieCast: null,
  upcomingMovies: [],
  topRatedMovies: [],
  searchResults: [],
  error: null,
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_all_movies':
      return { ...state, movies: action.payload, loading: false };
    case 'find_by_movies_details':
      return { ...state, movieDetails: action.payload, loading: false };
    case 'find_by_movie_cast_details':
      return { ...state, movieCast: action.payload, loading: false };
    case 'get_upcoming_movies':
      return { ...state, upcomingMovies: action.payload, loading: false };
    case 'get_top_rated_movies':
      return { ...state, topRatedMovies: action.payload, loading: false };
    case 'search_by_movie_name':
      return { ...state, searchResults: action.payload, loading: false };
    case 'MOVIE_API_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default movieReducer;
