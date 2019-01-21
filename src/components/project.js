import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div className="project">
        <a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.name}</a>
        <span className="language">
          <span className="text">{this.props.language}</span>
          <span className={`indicator ${this.props.language.toLowerCase()}`}/>
        </span>
        <div><p>{this.props.description}</p></div>
      </div>
    )
  }
}