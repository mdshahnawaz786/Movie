import React from 'react'
import Card from '../Cards/Card'
import { useSelector } from 'react-redux'

const TopRated = () => {
    const toprated = useSelector((storeData)=>{
        return storeData.toprated
    })
    // console.log(toprated);
  return (
    <>
    <div>
    <h2 style={{fontSize:"3rem", fontWeight:"700", color:"rgb(113, 188, 242)",textAlign:"center"}}>Top Rated Movies</h2>

        <Card movies={toprated}/>
    </div>
    </>
    
  )
}

export default TopRated