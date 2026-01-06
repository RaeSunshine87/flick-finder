import React, { useState } from 'react';
import './HomePage.css'; // Optional custom styles for HomePage
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesome icon component
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const HomePage = ({ onSearch, loading }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="home-page">
            <img src={require('../Assets/FFBackground.png')} alt="Flick Finder" className="home-image" />
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button 
                    className="search-btn" 
                    onClick={handleSearch} 
                    disabled={loading}
                >
                    {loading ? (
                        <span>Searching...</span>
                    ) : (
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default HomePage;






