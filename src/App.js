import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Navbarrr from './Components/Navbar/Navbarrr';
import Slider from './Components/ImageSlider/Slider';
import { useEffect } from 'react';
import { popularMoviesApi, topRatedMoviesApi,upcomingMoviesApi,trendingMoviesApi,comedyMoviesApi, actionMoviesApi , horroMoviesApi } from './Components/Functions/Functions';
import { useDispatch } from 'react-redux';
import Allmovie from './Components/allMovies/Allmovie';
import Popular from './Components/Popular/Popular';
import TopRated from './Components/Top_Rated/TopRated';
import Trending from './Components/Trending/Trending';
import Upcoming from './Components/UpComing/Upcoming';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Search from './Components/Search/Search';
import MyFooter from './Components/appFooter/MyFooter';
import Comedy from './Components/Comedy/Comedy';
import Horror from './Components/Horror/Horror';
import Action from './Components/Action/Action';



function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
     popularMoviesApi(dispatch)
     topRatedMoviesApi(dispatch)
    upcomingMoviesApi(dispatch)
    trendingMoviesApi(dispatch)
    comedyMoviesApi(dispatch)
    actionMoviesApi(dispatch)
    horroMoviesApi(dispatch)
  },[])

  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<><Navbarrr/><Slider/><Allmovie/><MyFooter/></>}/>
      <Route path='/popular' element={<><Navbarrr/><Popular/><MyFooter/></>}/>
      <Route path='/toprated' element={<><Navbarrr/><TopRated/><MyFooter/></>}/>
      <Route path='/trending' element={<><Navbarrr/><Trending/><MyFooter/></>}/>
      <Route path='/upcoming' element={<><Navbarrr/><Upcoming/><MyFooter/></>}/>
      <Route path='/comedy' element={<><Navbarrr/><Comedy/><MyFooter/></>}/>
      <Route path='/horror' element={<><Navbarrr/><Horror/><MyFooter/></>}/>
      <Route path='/action' element={<><Navbarrr/><Action/><MyFooter/></>}/>
      <Route path='moviedetails/:id' element={<><Navbarrr/><MovieDetails/><MyFooter/></>} />
      <Route path='search' element={<><Navbarrr/><Search/><MyFooter/></>} />
      <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
     </Routes>
    </div>
  );
}

export default App;


