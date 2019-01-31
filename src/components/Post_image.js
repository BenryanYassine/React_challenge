import React, { Component } from 'react'

export default class Post_image extends Component {
  render() {
    return (
      <div className="box">
      <img className="box" src={this.props.image}>
      </img></div>
    )
  }
}
