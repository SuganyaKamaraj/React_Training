// import React from 'react'
// const withIncrement= (OriginalComponent)=>{
//     class updateComponent  extends React.Component{
//         state={count:0}
//         increment=()=>{
//             this.setState(prevState=>{
//                 return {count:prevState.count+1}
//             })
//         }
//         componentDidMount(){}
//         render(){
//             return (
//                 <OriginalComponent countProp={this.state.count}
//                     incrementProp={this.increment}/>
//             )
//         }
//     }
//     return updateComponent
// }
// export default withIncrement
//withIncrementMigration
/* import React, { useState } from 'react'
export default function withIncrementMigration(OriginalComponent) {
    function updateComponent()
    {
        const [state, setState] = useState(0)
        function increment() {
            setState(state + 1)
        }
        return (
            <div>
                <OriginalComponent countProp={state}
                     incrementProp={increment}/>

            </div>
        )
    }
    

}
 */

