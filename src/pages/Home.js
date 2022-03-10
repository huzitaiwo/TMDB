import { useState, useEffect } from "react"

// components & pages
import Movie from "../components/Movie"
import Filter from "../components/Filter"

export default function Home() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [genre, setGenre] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=821df521d9494e5d28d041685eeaee64&page=${page}`
  
  useEffect(() => {
    fetchPopular()
  }, [page])
  
  const fetchPopular = async () => {
    setIsLoading(true)

    try {
      const data = await fetch(url)

      if(!data.ok) {
        throw new Error(data.statusText)
      }

      const movies = await data.json()
      console.log(movies)

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
  }

  return (
    <div className="home container">
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {filtered && (
        <Filter setFiltered={setFiltered} genre={genre} setGenre={setGenre} popular={popular} />
      )}
      <>
        {filtered && <Movie movies={filtered} totalPages={totalPages} page={page} setPage={setPage} isLoading={isLoading} /> }
      </>
    </div>
  )
}
