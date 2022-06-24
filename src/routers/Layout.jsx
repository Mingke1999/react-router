import React, { Component } from 'react'
import { HashRouter, Route,Switch} from "react-router-dom"
import Links from './Links'

import Home from '../views/Home'
import About from '../views/About'
import News from "../views/News"
import NotFound from '../views/NotFound'
import Details from '../views/Details'

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Links/>
          <Switch>
            <Route  exact path="/about" component={About} ></Route>
            <Route  exact path="/" component={Home}></Route>
            <Route  exact path="/news" component={News} ></Route>
            <Route  exact path="/details/:title" component={Details} ></Route>
            <Route component={NotFound} ></Route>
          </Switch>
      </HashRouter>
     
    )
  }
}
