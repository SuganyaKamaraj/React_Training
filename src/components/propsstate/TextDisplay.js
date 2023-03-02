import React, { Component } from 'react'

export default class TextDisplay extends Component {
  render() {
    let myStyle={
        fontSize:20,
        color:'red',
        background:'pink'
    }
    return (
      <div className='bg-warning'>
        <h4 style={myStyle} > Welcome : {this.props.textProp}</h4>


      </div>
    )
  }
}
