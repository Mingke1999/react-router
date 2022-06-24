import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./Links.css"

export default class Links extends Component {
  render() {
    return (
        <div className='nav'>
            <ol>
                <li><NavLink activeClassName='selected' exact to="/" activeStyle={{color:'blue'}}>Home</NavLink></li>
                <li><NavLink activeClassName='selected' to="/about">About</NavLink></li>
                <li><NavLink activeClassName='selected' to="/news" >News</NavLink></li>
            </ol>
        </div>
    )
  }
}
