import React, { Component } from 'react'
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from '../views/Home'
import About from '../views/About'
import Links from './Links'

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Links/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </HashRouter>
     
    )
  }
}
