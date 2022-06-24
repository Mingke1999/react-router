import React, { Component } from 'react'
import qs from "query-string"
export default class QueryPass extends Component {
  render() {
    //const params = qs.parse(this.props.location.search)
    //console.log(params)
    const {name} = qs.parse(this.props.location.search)
    return (
      <div>
        <h3>QUERY STRING</h3>
        <p>{name}</p>
      </div>
    )
  }
}
