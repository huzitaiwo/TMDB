import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function navbar() {
  return (
    <nav>
      <Link to='/'><h1 className='logo'>TMDB</h1></Link>
      <ul>
        <li><Link to='/latest'>Latest</Link></li>
        <li><Link to='/upcoming'>Upcoming</Link></li>
        <li><Link to='/rated'>Rated</Link></li>
      </ul>
    </nav>
  )
}
