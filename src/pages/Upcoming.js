import { useState, useEffect, useCallback } from "react"

// components & pages
import Movie from "../components/Movie"
import Filter from "../components/Filter"

export default function Upcoming() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [genre, setGenre] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=821df521d9494e5d28d041685eeaee64&page=${page}`
  
  const fetchUpcoming = useCallback(async () => {
    setIsLoading(true)

    try {
      const data = await fetch(url)

      if(!data.ok) {
        throw new Error(data.statusText)
      }

      const movies = await data.json()

      setIsLoading(false)
      setPage(movies.page)
      setTotalPages(movies.total_pages)
      setPopular([...popular, ...movies.results])
      setFiltered([...filtered, ...movies.results])

    }
    catch(err) {
      setIsLoading(false)
      setError(err.message)
    }
  }, [page, url])

  useEffect(() => {
    fetchUpcoming()
  }, [fetchUpcoming])

  return (
    <div className="container">
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {filtered && (
        <Filter setFiltered={setFiltered} genre={genre} setGenre={setGenre} popular={popular} />
      )}
      <>
        {filtered && <Movie movies={filtered} title="Upcoming" totalPages={totalPages} page={page} setPage={setPage} isLoading={isLoading} /> }
      </>
    </div> 
  )
}
