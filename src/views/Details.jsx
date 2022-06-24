import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.match.params.title}</h2>
      </div>
    )
  }
}
