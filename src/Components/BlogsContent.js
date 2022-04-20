import React, { Component } from 'react'

export default class BlogsContent extends Component {
  render() {
    return (
      <div className="BlogContent">
          <div style={{BakgroundImage: `url(${this.props.image})`}}></div>    
          <h1>{this.props.title}</h1>
          <p>{this.props.brief}</p>
      </div>
    )
  }
}
