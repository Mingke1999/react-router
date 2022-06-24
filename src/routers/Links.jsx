import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./Links.css"

export default class Links extends Component {
  render() {
    return (
        <div className='nav'>
            <ol>
                <li><NavLink  to="/">Home</NavLink></li>
                <li><NavLink  to="/about">About</NavLink></li>
                <li><NavLink  to="/news">News</NavLink></li>
            </ol>
        </div>
    )
  }
}
