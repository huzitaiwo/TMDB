import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function navbar() {
  return (
    <nav>
      <div className="container">
        <Link to='/'><h1 className='logo'>TMDB</h1></Link>
        <ul>
          <li><Link to='/upcoming'>Upcoming</Link></li>
          <li><Link to='/rated'>Top Rated</Link></li>
      </ul>
      </div>
    </nav>
  )
}
