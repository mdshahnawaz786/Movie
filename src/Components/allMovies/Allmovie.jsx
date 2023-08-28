import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Cards/Card'

const Allmovie = () => {
    const all = useSelector((storeData)=>{
        return storeData.all
    })
    
    // console.log(all);
  return (
    <div>
        <h2 style={{fontSize:"3rem", fontWeight:"700", color:"rgb(113, 188, 242)",textAlign:"center"}}>All Movies</h2>
        <Card movies={all}/>
    </div>
  )
}

export default Allmovie