import { Link } from 'react-router-dom'

// styles
import './Movie.css'

export default function Movie({ movies, totalPages, page, setPage, isLoading, title }) {
  return (
    <>
      <p className='title'>List of {title} movies</p>
      <div className="popular-movies">
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className='movies'>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
          </Link>
        ))}
      </div>
      {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{isLoading ? 'Loading...' : 'load more'}</button>}
    </>
  )
}
