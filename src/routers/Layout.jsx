import React, { Component } from 'react'
import { HashRouter, Route,Switch} from "react-router-dom"
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
          <Switch>
            <Route path="/about" component={About} ></Route>
            <Route path="/" component={Home}></Route>
            <Route path="/news" component={News} ></Route>
            <Route component={NotFound} ></Route>
          </Switch>
      </HashRouter>
     
    )
  }
}
