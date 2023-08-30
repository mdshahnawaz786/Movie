import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Cards/Card';
import './action.css'

const Action = () => {
    const actionMovie = useSelector((storeData) => {
        return storeData.actionMovie;
      });
  return (
    <div>
        <h2 className='actionHeading'
        >
          Action Movies
        </h2>
        <Card movies={actionMovie}/>
    </div>
  )
}

export default Action