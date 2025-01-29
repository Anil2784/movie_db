import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './components/UserProfile';
import MovieDetails from './pages/MovieDetails';
import UpcommingMovie from './pages/UpcommingMovie';
import TopRatedMovie from './pages/TopRatedMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchedMovie from './pages/SearchedMovie';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/upcoming/movie" element={<UpcommingMovie />} />
        <Route path="/top-rated/movie" element={<TopRatedMovie />} />
        <Route path="/search/movie/:name" element={<SearchedMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
