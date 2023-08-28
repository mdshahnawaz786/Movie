import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Cards/Card'
import './search.css'

const Search = () => {
    const search = useSelector((storeData)=>{
        return storeData.search
    })
    console.log(search);
  return (
    <div className='searchBox'>
              {/* <h2 style={{fontSize:"2rem",  color:"rgb(113, 188, 242)",textAlign:"center"}}>Searched Results</h2> */}

        {/* <Card movies={search}/> */}
        {search.length > 0 ? <Card movies={search}/> : <><h3>No Result Found</h3></>}
    </div>
  )
}

export default Search