import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage'; 
import FindYourFlick from './components/FindYourFlick'; 
import ContactPage from './components/ContactPage'; 
import './style.css'; 

const apiKey = "e19fddd4"; // Your OMDb API key

const App = () => {
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(''); 

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
        } finally {
            setLoading(false); 
        }
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage onSearch={searchMovies} loading={loading} />} />
                    <Route path="/find-your-flick" element={<FindYourFlick movies={movies} />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
            </div>
        </Router>
    );
};

export default App;









