import React from "react";
import "./project.scss";

const sanitizeLanguage = (language) =>
    language.toLowerCase().replace("#", "sharp").replace(/\+/g, "plus");

export default function Project({ url, language, name, description }) {
    const link = url ? url : `https://gitlab.com/rovge/${name}`;

    return (
        <div className="project">
            <a href={link} rel="noopener noreferrer" target="_blank">{name}</a>
            <span className="language">
                <span className="text">{language}</span>
                <span className={`indicator ${sanitizeLanguage(language)}`}/>
            </span>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}
