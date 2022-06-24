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
                <li><NavLink activeClassName='selected' to="/user" >User</NavLink></li>
                <li><NavLink activeClassName='selected' to="/querypass?name=mingke" >QUERYSTRING</NavLink></li>
            </ol>
        </div>
    )
  }
}
