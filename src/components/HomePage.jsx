import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ onSearch, loading }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(); // Search on Enter key
        }
    };

    return (
        <div className="home-page">
            <img src={require('../Assets/FlickFinderLogo.png')} alt="Flick Finder Logo" className="logo" />
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="search-btn" onClick={handleSearch} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
        </div>
    );
};

export default HomePage;












