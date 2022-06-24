import React, { Component } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from '../views/Home'
import About from '../views/About'
import Links from './Links'
import News from "../views/News"
import NotFound from '../views/NotFound'

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Links/>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route exact path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </HashRouter>
     
    )
  }
}
