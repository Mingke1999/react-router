import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class MyInfo extends Component {
goMain = () =>{
    //this.props.history.push("/");
    //this could cause error since the component wasn't in the router list
    this.props.history.push("/");

}
  render() {
    return (
      <div>
        <h2>Professional Team</h2>
        <button onClick={this.goMain}>Main</button>
      </div>
    )
  }
}
export default withRouter(MyInfo)