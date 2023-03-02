    import React, { Component } from 'react'
    import withIncrement from './withIncrement'
    
    export  class ButtonComponent extends Component {
      render() {
        const {countProp,incrementProp }= this.props
        return (
          <div>
            <button className='btn btn-success'
            onClick={incrementProp}> Clicked {countProp} times</button>
          </div>
        )
      }
    }
    export default withIncrement (ButtonComponent)
    