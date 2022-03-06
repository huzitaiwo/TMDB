import { useState, useEffect } from "react"

export default function Latest() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [genre, setGenre] = useState(0)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const url = `https://api.themoviedb.org/3/movie/latest?api_key=821df521d9494e5d28d041685eeaee64&page=${page}`

  return (
    <div>Latest</div>
  )
}
