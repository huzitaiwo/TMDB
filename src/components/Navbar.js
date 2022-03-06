// styles
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'><h1>TMDB</h1></Link>
      <ul>
        <li><Link to='/latest'>Latest</Link></li>
        <li><Link to='/upcoming'>Upcoming</Link></li>
        <li><Link to='/rated'>Rated</Link></li>
      </ul>
    </nav>
  )
}
