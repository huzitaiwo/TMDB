// https://api.themoviedb.org/3/movie/550?api_key=821df521d9494e5d28d041685eeaee64


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

import { BrowserRouter, Route, Switch } from "react-router-dom"

// styles
import './App.css'

import Home from "./pages/Home"
import Rated from "./pages/Rated"
import Latest from "./pages/Latest"
import Upcoming from "./pages/Upcoming"
import Navbar from "./components/Navbar"
import MovieDetails from "./pages/MovieDetails"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/latest'>
            <Latest />
          </Route>
          <Route path='/upcoming'>
            <Upcoming />
          </Route>
          <Route path='/rated'>
            <Rated />
          </Route>
          <Route path='/movies/:id'>
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
