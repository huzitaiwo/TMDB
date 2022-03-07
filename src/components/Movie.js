// styles
import './Movie.css'

export default function Movie({ movies }) {
  return (
    <div className="popular-movies">
      {movies.map(movie => (
        <div>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
        </div>
      ))}
    </div>
  )
}
