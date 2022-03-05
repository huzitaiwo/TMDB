import { useEffect } from 'react'

// styles
import './Filter.css'

export default function Filter({ setFiltered, genre, setGenre, popular }) {

  useEffect(() => {

    if(genre === 0) {
      setFiltered(popular)
      return;
    }

    const filtered = popular.filter(movie => movie.genre_ids.includes(genre))
    setFiltered(filtered)
      
  }, [genre])
  

  return (
    <div className='filter'>
      <button className={genre === 0 ? "active" : ''} onClick={() => setGenre(0)}>All</button>
      <button className={genre === 35 ? "active" : ''} onClick={() => setGenre(35)}>Comedy</button>
      <button className={genre === 28 ? "active" : ''} onClick={() => setGenre(28)}>Action</button>
      <button className={genre === 16 ? "active" : ''} onClick={() => setGenre(16)}>Animation</button>  
    </div>
  )
}
