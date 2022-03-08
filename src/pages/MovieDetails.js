import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

export default function MovieDetails() {
  const [movie, setMovie] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const { id } = useParams()

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c50bfdb0e335423db4a57114f454cc4d`

  useEffect(() => {
    fetchPopular()
  }, [])
  
  const fetchPopular = async () => {
    setIsLoading(true)

    try {
      const data = await fetch(url)

      if(!data.ok) {
        throw new Error(data.statusText)
      }

      const movie = await data.json()

      console.log(movie)
      setIsLoading(false)
      setMovie(movie)


    }
    catch(err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {movie && (
        movie.overview
      )}
    </div>
    
  )
}
