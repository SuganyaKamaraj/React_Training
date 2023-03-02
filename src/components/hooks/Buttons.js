//import React, { Component } from 'react' -- MIGRATION from CLASS to FUNCTIONAL

// export default class Button extends Component {
//     state={buttonText:'Click Me, Pls'}
//     handleClick=() => {
//         this.setState({buttonText:'Thanks, been Clicked'})
//     }
    
//   render() {
//     return (
//       <div>

//         <button onClick={this.handleClick}> {this.state.buttonText}</button>
//       </div>
//     )
//   }
// }

import React,{useState} from 'react'
export default function Buttons()
{
    const [buttonText,setButtonText] = useState('Click Me, Pls') //  state={buttonText:'Click Me, Pls'}
    //const [customers] = useState([])  //Initialize
    function handleClick() {
        //Fetch API - REST
        setButtonText ('Thanks, been Clicked')


    }
    return(
        <div> 
            <h2> With Hook </h2>
            <button onClick={handleClick}> { buttonText }</button>
        </div>

    )
}

