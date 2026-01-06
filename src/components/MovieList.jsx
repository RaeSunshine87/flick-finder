import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <div className="movies__grid">
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div key={movie.imdbID} className="movies__card">
                        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt={movie.Title} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
};

export default MovieList;





