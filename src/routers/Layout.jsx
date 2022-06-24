import React, { Component } from 'react'
import { HashRouter, Route} from "react-router-dom"
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
            <Route path="/about" component={About} ></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="/news" component={News} ></Route>
            <Route path="*" component={NotFound} ></Route>
      </HashRouter>
     
    )
  }
}
