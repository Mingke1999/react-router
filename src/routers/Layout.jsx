import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from '../views/Home'
import About from '../views/About'

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>

      </Router>
     
    )
  }
}
