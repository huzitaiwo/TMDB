// https://api.themoviedb.org/3/movie/550?api_key=821df521d9494e5d28d041685eeaee64

// images
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

// latest
//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

// upcoming
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

// top-rated
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

// now-playing
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

// get videos
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

// translation
// https://api.themoviedb.org/3/movie/{movie_id}/translations?api_key=<<api_key>>

import { useState, useEffect } from "react"

// styles
import "./App.css"
import Movie from "./components/Movie"
import Filter from "./components/Filter"

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [genre, setGenre] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  // https://api.themoviedb.org/3/movie/popular?api_key=821df521d9494e5d28d041685eeaee64&page=1

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=821df521d9494e5d28d041685eeaee64&page=${page}`
  
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

      const movies = await data.json()

      setIsLoading(false)
      setPopular(movies.results)
      setFiltered(filtered)
      setPage(movies.page)
      setTotalPages(movies.total_pages)

    }
    catch(err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  return (
    <div className="App">
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {filtered && (
        <Filter setFiltered={setFiltered} genre={genre} setGenre={setGenre} popular={popular} />
      )}
      <div className="popular-movies">
        {filtered.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
      {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{isLoading ? 'Loading...' : 'load more'}</button>}
    </div>
  )
}

export default App;
