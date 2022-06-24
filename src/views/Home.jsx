import React, { Component } from 'react'

export default class Home extends Component {
  clickHandle = () =>{
    //this.props.history.push("/about")
    this.props.history.replace("/about")
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.clickHandle}>GO ABOUT</button>
      </div>
    )
  }
}
