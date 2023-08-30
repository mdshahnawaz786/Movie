import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Cards/Card';
import './comedy.css'

const Comedy = () => {
    const comedy = useSelector((storeData) => {
        return storeData.comedy;
      });
    //   console.log(comedy);
  return (
    <div>
        <h2 className='comedyHeading'>
          Comedy Movies
        </h2>
        <Card movies={comedy}/>
    </div>
  )
}

export default Comedy