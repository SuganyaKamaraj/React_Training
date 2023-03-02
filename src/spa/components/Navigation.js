import React from 'react'
import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='navigation bg-warning'>
        <Link  className='link' to="about"> ABOUT</Link>    
        <Link  className='link' to="users"> USERS</Link>    
        <Link  className='link' to="dynamic"> PROFILE</Link>    
        
        
        </div>
  )
}

export default Navigation