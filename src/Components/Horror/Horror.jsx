import React from 'react'
import Card from '../Cards/Card'
import { useSelector } from 'react-redux';
import './horror.css'
const Horror = () => {
    const horror = useSelector((storeData) => {
        return storeData.horror;
      });

  return (
    <div>
        <h2 className='horrorHeading'>
          Horror Movies
        </h2>
        <Card movies={horror}/>
    </div>
  )
}

export default Horror