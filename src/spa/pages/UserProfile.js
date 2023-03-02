import React from 'react'
//import useFetch from '../../components/hooks/useFetch'
import { useParams } from 'react-router-dom'

const UserProfile = () =>  {
    const {id} = useParams() //route.snapshot.match.params['id']
    //useFetch (url+id)
  return (
    <div className='bg-warning'>
        <h3> Profile of #{id} </h3>
        <h4> Rahul is a senior developer with 15 exp </h4>

    </div>
  )
}

export default UserProfile