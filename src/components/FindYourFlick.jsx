import React from 'react';
import MovieList from './MovieList'; // Import the MovieList component

const FindYourFlick = ({ movies }) => {
    return (
        <div>
            <h2>Find Your Flick</h2>
            <MovieList movies={movies} /> {/* Display the list of movies */}
        </div>
    );
};

export default FindYourFlick; // Export the FindYourFlick component




