import React from 'react'
import Card from '../Cards/Card'
import { useSelector } from 'react-redux'

const Upcoming = () => {
    const upcoming = useSelector((storeData)=>{
        return storeData.upcoming
    })
  return (
    <>
    <div>
    <h2 style={{fontSize:"3rem", fontWeight:"700", color:"rgb(113, 188, 242)",textAlign:"center"}}>Upcoming Movies</h2>

        <Card movies={upcoming}/>
    </div>
    </>
  )
}

export default Upcoming