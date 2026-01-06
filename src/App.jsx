import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage'; // Ensure this path is correct
import FindYourFlick from './components/FindYourFlick'; // Ensure this path is correct
import ContactPage from './components/ContactPage'; // Ensure this path is correct
import './style.css'; // Ensure this path is correct

const apiKey = "e19fddd4"; // Your OMDb API key

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Function to search movies
    const searchMovies = async (query) => {
        if (!query) return;
        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
            const data = response.data;

            if (data.Search) {
                setMovies(data.Search);
            } else {
                setError('No results found.');
                setMovies([]);
            }
        } catch (err) {
            setError('Error fetching data.');
        }
        setLoading(false);
    };

    return (
        <Router>
            <div>
                <header className="hero">
                    <nav className="hero__nav">
                        <Link to="/">Home</Link>
                        <Link to="/find-your-flick">Find Your Flick</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage onSearch={searchMovies} loading={loading} />} />
                    <Route path="/find-your-flick" element={<FindYourFlick movies={movies} onSearch={searchMovies} />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
            </div>
        </Router>
    );
};

export default App;

