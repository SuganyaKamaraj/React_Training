import React from 'react'
import {useNavigate} from 'react-router-dom'

export  const HomeButton =() => {
    let navigate =useNavigate()
    const handleClick= () => {
        //rest API to check roles 
        navigate('/')
    }
  
    return (
      <div>
        <button className='btn btn-danger'
        onClick={handleClick}> Go to Home Page</button>
      </div>
    )
  }

