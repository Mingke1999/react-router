import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Links.css"

export default class Links extends Component {
  render() {
    return (
        <div className='nav'>
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ol>
        </div>
    )
  }
}
