import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] = useState(null)
  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null)
    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json()
    const moviesList = data.results.map((result) => {
      return {
        id: result.episode_id,
        title: result.title,
        openingText: result.opening_crawl
        }
      })
    setMovies(moviesList)
    setIsLoading(false)
    }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading & movies.length===0 && <p>Found no movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
