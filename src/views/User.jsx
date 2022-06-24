import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
  render() {
    return (
      <div>
        <div style={{float:'left'}}>
            <ul>
                <li><Link to="/user/profile">Profile</Link></li>
                <li><Link to="/user/booking">Bookings</Link></li>
            </ul>
           <div style={{float:'left',marginLeft:'30px'}}> {this.props.children}</div>
        </div>
      </div>
    )
  }
}
