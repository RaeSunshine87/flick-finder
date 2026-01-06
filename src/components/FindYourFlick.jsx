import React from 'react';
import MovieList from './MovieList'; // Import the MovieList component

const FindYourFlick = ({ movies, loading, onSearch }) => {
    return (
        <div>
            <h2>Find Your Flick</h2>
            <div>
                <button onClick={() => onSearch("fast")}>Search Example Movie: Fast</button> {/* Example search button */}
            </div>
            {loading && <p>Loading...</p>} {/* Show loading state while fetching */}
            <MovieList movies={movies} />
        </div>
    );
};

export default FindYourFlick;





