import React, { useState } from 'react';
import MovieList from './MovieList'; // Import the MovieList component
import Header from './Header';
import MoviePopup from './MoviePopup';
import axios from 'axios';

const FindYourFlick = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = "e19fddd4"; // Your actual OMDb API key

    const handleMovieClick = async (movie) => {
        setLoading(true);
        const response = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);

        if (response.data) {
            setSelectedMovie(response.data); // Set the complete movie data
        }
        setLoading(false);
    };

    const handleClosePopup = () => {
        setSelectedMovie(null); // Close the popup
    };

    return (
        <div>
            <Header />
           <h2>Find Your Flick</h2>
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
            {loading && <p>Loading...</p>} // Show loading state
            {selectedMovie && <MoviePopup movie={selectedMovie} onClose={handleClosePopup} />}
        </div>
    );
};

export default FindYourFlick;


