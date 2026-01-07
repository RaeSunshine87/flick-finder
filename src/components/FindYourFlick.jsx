import React, { useState } from "react";
import MovieList from "./MovieList"; // Import the MovieList component
import Header from "./Header"; // Assuming you want the header to show
import MoviePopup from "./MoviePopup"; // Import MoviePopup to show movie details
import axios from "axios";

const apiKey = "e19fddd4"; // Your OMDb API key

const FindYourFlick = ({ movies, onSearch, loading }) => {
    const [selectedMovie, setSelectedMovie] = useState(null); // State to hold selected movie
    const [query, setQuery] = useState(''); // State for search query

    const handleMovieClick = async (movie) => {
        // Fetch detailed movie information when a movie is clicked
        const response = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
        if (response.data) {
            setSelectedMovie(response.data); // Set the complete movie data
        }
    };

    const handleClosePopup = () => {
        setSelectedMovie(null); // Reset selected movie to close the modal
    };

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query); // Call search function passed down from App
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch(); // Trigger search on Enter key
        }
    };

    return (
        <div>
            <Header />
            <h2>Find Your Flick</h2>
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
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>

            {loading && <p>Loading...</p>} {/* Show loading text */}
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
            
            {/* Conditional Rendering for MoviePopup */}
            {selectedMovie && (
                <MoviePopup movie={selectedMovie} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default FindYourFlick;

