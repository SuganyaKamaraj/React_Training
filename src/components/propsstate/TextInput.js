import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component {
    state={inputText:'Suganya'}
    handleChanges(event)
    {
        this.setState({inputText:event.target.value})
    }
  render() {
    return (
      <div className='bg-info'>
        info: <input type="text" id="txt"/>
        <br/>
        Company: <input type="text" value="BOFA" />
        <br />
        UserName : <input type="text" value={this.state.inputText} 
        onChange={(event) => this.handleChanges(event)}/>

        {this.state.inputText? console.log('valid'): console.log("Data Required")}
        {/* {this.state.isAuthenticated ? <DashBoard /> : <Login/>} */}
        {this.state.inputText
        ? < TextDisplay textProp={this.state.inputText} />
        : <  TextDisplay textProp="Enter Username ps....." />
     }
      </div>
    )
  }
}
