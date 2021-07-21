import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';

const ALL_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const [favourites, setFavourites] = useState([])

  const fetchMovies = (api) => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setMovies(data.results)
      })
  }

  useEffect(() => {
    fetchMovies(ALL_MOVIES_API)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    if(searchTerm === ''){
      fetchMovies(ALL_MOVIES_API)
    }
  }

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
    e.preventDefault()
    
    setTimeout(() => {
      if(searchTerm !== ''){  
        fetchMovies(SEARCH_API + searchTerm)
        // setSearchTerm('');
      }
      else{
        fetchMovies(ALL_MOVIES_API)
      }
    }, 2000);
  }

  const addFavourite = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
  }

  const removeFavourite = (movie) => {
    const newFavouristList = favourites.filter(favourites => favourites.id !== movie.id)
    setFavourites(newFavouristList)
}

  return (
    <div className="App">

      <Favourites favourites={favourites} removeCLick={(movie) => removeFavourite(movie)}  />

      <div className="searchBox">
        <form onSubmit={submitHandler}>
          <input type="search" placeholder="search" value={searchTerm} onChange={changeHandler} />
          <i className="fa fa-search"></i>
        </form>
      </div>
      
      <div className="allMoviesList">
        {
          movies.map((movie) => 
            <MovieList favouriteClick={() => addFavourite(movie)} data={movie} />
          )
        }
      </div>

    </div>
  );
}

export default App;
