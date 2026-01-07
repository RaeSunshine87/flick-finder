import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movies__grid">
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div
                        key={movie.imdbID}
                        className="movies__card"
                        onClick={() => onMovieClick(movie)} // Pass the clicked movie to the handler
                    >
                        <img 
                            className="movies__img" 
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} 
                            alt={movie.Title} 
                        />
                        <div className="movies__info">
                            <h3 className="movies__title">{movie.Title}</h3>
                            <p className="movies__year">{movie.Year}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
};

export default MovieList;







