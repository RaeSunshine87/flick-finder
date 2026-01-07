import React from 'react';


const MoviePopup = ({ movie, onClose }) => {
    if (!movie) return null; // Safeguard: only render if a movie is provided

    return (
        <div className="modal">
            <div className="modal__content">
                <span className="modal__close" onClick={onClose}>&times;</span>
                <img 
                    className="modal__poster" 
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} 
                    alt={movie.Title} 
                />
                <div className="modal__info">
                    <h2 className="modal__title">{movie.Title}</h2>
                    <p><b>Year:</b> {movie.Year}</p>
                    <p><b>Genre:</b> {movie.Genre}</p>
                    <p><b>Rating:</b> {movie.imdbRating}</p>
                    <p><b>Actors:</b> {movie.Actors}</p>
                    <p><b>Plot:</b> {movie.Plot}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePopup;




