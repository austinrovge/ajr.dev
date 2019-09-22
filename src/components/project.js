import React from 'react'

const sanitizeLanguage = (language) =>
    language.toLowerCase().replace('#', 'sharp').replace(/\+/g, 'plus')

export default function Project({ url, language, name, description }) {
  return (
    <div className="project">
      <a href={url} rel="noopener noreferrer" target="_blank">{name}</a>
      <span className="language">
        <span className="text">{language}</span>
        <span className={`indicator ${sanitizeLanguage(language)}`}/>
      </span>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}
