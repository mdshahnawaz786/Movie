
 export const popularMoviesApi = async (dispatch) => {
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=09f2eb4afdcce1940f11d793449580d0&language=en-US");
    let data = await res.json();

    dispatch({
      type: "popular",
      payload: data.results,
    });
  };

  export const topRatedMoviesApi = async(dispatch)=>{
    let res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=09f2eb4afdcce1940f11d793449580d0&language=en-US")
    let data = await res.json()

    dispatch({
        type: "toprated",
        payload: data.results,
    })
  }

  export const upcomingMoviesApi = async(dispatch)=>{
    let res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=09f2eb4afdcce1940f11d793449580d0&language=en-US")
    let data = await res.json()

    dispatch({
        type: "upcoming",
        payload: data.results,
    })
  }

  export const trendingMoviesApi = async(dispatch)=>{
    let res = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=09f2eb4afdcce1940f11d793449580d0&language=en-US")
    let data = await res.json()

    dispatch({
        type: "trending",
        payload: data.results,
    })
  }


  export const comedyMoviesApi = async (dispatch) => {
    let res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=09f2eb4afdcce1940f11d793449580d0&query=comedy&page=1");
    let data = await res.json();

    dispatch({
      type: "comedy",
      payload: data.results,
    })
  };

  export const actionMoviesApi = async (dispatch) => {
    let res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=09f2eb4afdcce1940f11d793449580d0&query=action&page=1");
    let data = await res.json();

    dispatch({
      type: "actionMovie",
      payload: data.results,
    })
  };

  export const horroMoviesApi = async (dispatch) => {
    let res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=09f2eb4afdcce1940f11d793449580d0&query=horror&page=1");
    let data = await res.json();

    dispatch({
      type: "horror",
      payload: data.results,
    })
  };



  export const idMoviesApi = async(id,setState)=>{
    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=09f2eb4afdcce1940f11d793449580d0`)
    let data = await res.json()
    // console.log(data);
    setState(data)
    // console.log(data);
  }


  export async function credits(id,dispatch){

    const apiP1 = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=09f2eb4afdcce1940f11d793449580d0&cast=10`);
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)

    dispatch({
        type:"cast",
        payload:jsonData1.cast
    })
}

export async function trailer(id,dispatch){

    const apiP1 = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=09f2eb4afdcce1940f11d793449580d0`);
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)
    // console.log(jsonData1);
    let n = jsonData1.results.length
    if(n===0){
      return
    }
    // console.log(n);
    // console.log(jsonData1.results[0].key);

    // console.log(movieTrailer);
    // console.log(jsonData1[0]);
    dispatch({
        type:"video-key",
        payload:jsonData1.results[n-1].key
    })
    // console.log(movieTrailer[0].key);
}
 

export function filterSearch(dispatch,all,searchMovie){
      const arr = []
      const filterArr = all.filter((ele)=>{
          if(((ele.original_title.toLowerCase()).includes(searchMovie.toLowerCase()))){
              return ele
          }
      })

      for(let i=0; i<filterArr.length; i++){
        if(arr.length === 0){
          arr.push(filterArr[i])
        }
        else{
          if(isDuplicate(filterArr[i], arr)){
            arr.push(filterArr[i])
          }
        }
      }
       
      dispatch({
        type : "search",
        payload: arr
      })
}


function isDuplicate(filterArr, arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i].id === filterArr.id){
        return false
      }
    }
    return true
}