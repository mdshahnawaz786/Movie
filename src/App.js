import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Navbarrr from './Components/Navbar/Navbarrr';
import Slider from './Components/ImageSlider/Slider';
import { useEffect } from 'react';
import { popularMoviesApi, topRatedMoviesApi,upcomingMoviesApi,trendingMoviesApi } from './Components/Functions/Functions';

import { useDispatch } from 'react-redux';
import Allmovie from './Components/allMovies/Allmovie';
import Popular from './Components/Popular/Popular';
import TopRated from './Components/Top_Rated/TopRated';
import Trending from './Components/Trending/Trending';
import Upcoming from './Components/UpComing/Upcoming';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Search from './Components/Search/Search';



function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
     popularMoviesApi(dispatch)
     topRatedMoviesApi(dispatch)
    upcomingMoviesApi(dispatch)
    trendingMoviesApi(dispatch)
  },[])

  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<><Navbarrr/><Slider/><Allmovie/></>}/>
      <Route path='/popular' element={<><Navbarrr/><Popular/></>}/>
      <Route path='/toprated' element={<><Navbarrr/><TopRated/></>}/>
      <Route path='/trending' element={<><Navbarrr/><Trending/></>}/>
      <Route path='/upcoming' element={<><Navbarrr/><Upcoming/></>}/>
      <Route path='moviedetails/:id' element={<><Navbarrr/><MovieDetails/></>} />
      <Route path='search' element={<><Navbarrr/><Search/></>} />
      <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
     </Routes>
    </div>
  );
}

export default App;


