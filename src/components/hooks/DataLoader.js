//useEffect: replacement to component did mount & GDFSP

import React,{useState,useEffect, forwardRef} from "react"

export default function DataLoader()
{
    const[users,setUsers]=useState([])
    //called automatically when comp load
    useEffect( () => {
        let url="https://jsonplaceholder.typicode.com/users"
        fetch(url)
            .then(response => response.json()) //resolved -if  all good
            .then(data =>  setUsers(data))
            //url=null // clean up
        
    },[])

    
    return (
        <div className="bg-warning"> 
        <ul>
            {users.map(el => (<li key={el.id} >  {el.name} - {el.email} </li>
            ))}
            </ul>
            </div>
    )


}