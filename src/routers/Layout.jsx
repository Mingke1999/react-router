import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect} from "react-router-dom"
import Links from './Links'

import Home from '../views/Home'
import About from '../views/About'
import News from "../views/News"
import NotFound from '../views/NotFound'
import Details from '../views/Details'
import QueryPass from '../views/QueryPass'
import User from '../views/User'
import Profile from '../views/UserSub/Profile'
import History from '../views/UserSub/History'
import LifeCycle from '../views/LifeCycle'

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Links/>
          <Switch>
            <Redirect from="/home" to="/"></Redirect>
            <Route  exact path="/about" component={About} ></Route>
            <Route  exact path="/" component={Home}></Route>
            <Route  exact path="/news" component={News} ></Route>
            <Route  exact path="/life" component={LifeCycle} ></Route>
            {/*<Route  exact path="/user" component={User} ></Route>*/}
            <User path="/user">
              <Redirect from="/user" to="/user/profile"></Redirect>
              <Route path="/user/profile" component={Profile}></Route>
              <Route path="/user/booking" component={History}></Route>
            </User>
            <Route  exact path="/details/:title" component={Details} ></Route>
            <Redirect from="/query" to={{
                pathname: "/querypass",
                search: "?name=Hello",
    
              }}/>
            <Route  exact path="/querypass" component={QueryPass}></Route>
            <Route component={NotFound} ></Route>
          </Switch>
      </HashRouter>
     
    )
  }
}
