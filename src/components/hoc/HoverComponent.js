import React, { Component } from 'react'
import withIncrement from './withIncrement'

class HoverComponent extends Component {
  render() {
 
    const {countProp,incrementProp} = this.props
    return (
      <div>
           <h2 className="bg-warning" onMouseOver={incrementProp}> 
           Hovered {countProp} times </h2>
      </div>
    )
  }
}
export default withIncrement(HoverComponent)
