import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { HomeButton } from '../components/HomeButton'

 const Users = () => {

    const navigate=useNavigate()
    const location =useLocation()
    console.log(`Current Location: ${location.pathname}`)


    const handleClick=(userId) => {
        //cdn checks
        navigate(`/users/${userId}`)

    }
  return (
    <div >
        <h2> Users Page</h2>
        <button className='userlink'
        onClick={() => handleClick('123')}>
            View User Profile of # 123
        </button>
        <HomeButton />
        <Outlet/>

    </div>
  )
}
export default Users
