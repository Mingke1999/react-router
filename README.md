npm i react-router-dom@5.2.0

HashRouter
/#/path use anchor <a href="#/about"></a>
BrowseRouter
/path use History.pushState() from H5

Link will be rendered as <a>
<Link to="path"> equals to <a href="#/path"> not recommend
exact only goes the current

NavLink highlight
activeStyle
activeClassName

method 1 (restful API)
    1. add key
    <Route  exact path="/details/:id" component={Details} ></Route>
    2. passing value
    <Link to={`/details/${ele.id}`}> {ele.title}</Link>
    3.read value
    <p>id={this.props.match.params.id}</p>

method 2 querystring
    1. passing value in Link
    <li><NavLink activeClassName='selected' to="/querypass?name=mingke" >QUERYSTRING</NavLink></li>
    2. read data
    npm install --save query-string
      const {name} = qs.parse(this.props.location.search)
    