// get videos
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

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
