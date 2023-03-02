//HOC
//Auth checs, for dynamic themes, live stock updates,....
//write inner nested 

//import { within } from '@testing-library/react'
import React from 'react'
const withIncrement= (OriginalComponent)=>{
    class updateComponent  extends React.Component{
        state={count:0}
        increment=()=>{
            this.setState(prevState=>{
                return {count:prevState.count+1}
            })
        }
        componentDidMount(){}
        render(){
            return (
                <OriginalComponent countProp={this.state.count}
                    incrementProp={this.increment}/>
            )
        }
    }
    return updateComponent
}
export default withIncrement