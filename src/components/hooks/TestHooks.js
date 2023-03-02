import React from "react";
import useFetch from "./useFetch";

const TestHook = (props) => {
    const url = "https://jsonplaceholder.typicode.com/users"

    const { loading, error, data = [] } = useFetch(url)
    if (error) return <p className="text-danger"> Error Occured </p>
    if (loading) return <p> Loading....pls wait </p>
    return (
        <div className="bg-secondary>">
            <h1> Data from REST API using Custom hook</h1>
            <ul>
                {data?.map(el => (<li key={el.id} >  {el.name} - {el.email} </li>
                ))}
            </ul>
        </div>
    )
}

export default TestHook