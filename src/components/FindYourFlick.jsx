import React from 'react';
import MovieList from './MovieList'; // Assuming MovieList is implemented

const FindYourFlick = ({ movies, onSearch }) => {
    return (
        <div>
            <h2>Find Your Flick</h2>
            {/* You may want to add a search input or a button here */}
            <MovieList movies={movies} />
        </div>
    );
};

export default FindYourFlick;



