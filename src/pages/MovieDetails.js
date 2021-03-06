import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from "react"

// styles
import '../components/Movie.css'

export default function MovieDetails() {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c50bfdb0e335423db4a57114f454cc4d`
  const path = 'https://image.tmdb.org/t/p/w500';
  
  const fetchDetails = useCallback(async () => {
    setIsLoading(true)

    try {
      const data = await fetch(url)

      if(!data.ok) {
        throw new Error(data.statusText)
      }

      const movie = await data.json()

      setIsLoading(false)
      setMovie(movie)

    }

    catch(err) {
      setIsLoading(false)
      setError(err.message)
    }
  }, [url])

  useEffect(() => {
    fetchDetails()
  }, [fetchDetails])

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {movie && (
        <div className='container'>
          <div className='banner'>
            <div className='movie-detials'>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <a href={movie.homepage} target="_blank" rel="noreferrer" className='external-link'>visit site</a>
              <div className='movie-view'>
                <p>{movie.tagline}</p>
                <p>{movie.release_date}</p>
              </div>
            </div>
            <img className='main-image' src={path + movie.poster_path} alt={movie.title} />
          </div>
          {movie.belongs_to_collection && (
            <div className='movie-preview'>
              <img src={path + movie.belongs_to_collection.backdrop_path} alt={movie.title} />
              <img src={path + movie.belongs_to_collection.poster_path} alt={movie.title} />
            </div>
          )}
        </div>
      )}
    </div>
    
  )
}
