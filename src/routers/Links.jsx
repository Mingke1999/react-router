import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Links extends Component {
  render() {
    return (
        <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ol>
    )
  }
}
