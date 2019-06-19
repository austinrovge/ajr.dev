import React, { Component } from 'react'

export default class Project extends Component {
  sanitizeLanguage(language) {
    return language.toLowerCase().replace('#', 'sharp').replace(/\+/g, 'plus')
  }

  render() {
    return (
      <div className="project">
        <a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.name}</a>
        <span className="language">
          <span className="text">{this.props.language}</span>
          <span className={`indicator ${this.sanitizeLanguage(this.props.language)}`}/>
        </span>
        <div><p>{this.props.description}</p></div>
      </div>
    )
  }
}