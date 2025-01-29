import React, { useState } from 'react';
import { Link, useNavigate, useParams,useSearchParams } from 'react-router-dom';
import './Header.css'; // Optional for styling

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // console.log(searchTerm);
  

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add any necessary input sanitization here to prevent security vulnerabilities.
    // For example:  searchTerm = searchTerm.replace(/[^a-zA-Z0-9]/g, '');

    if (searchTerm.trim() === "") {
      // Handle empty search - perhaps display a message or do nothing.
      alert("Please enter a search term.");
      return;
    }


    navigate(`/search/movie/${encodeURIComponent(searchTerm)}`); // Use navigate and encodeURIComponent
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MovieApp</Link> {/* Replace with your logo if you have one */}
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/top-rated/movie">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming/movie">Upcoming</Link>
          </li>
          <li>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', flexGrow: 1 }}
              />
              <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
