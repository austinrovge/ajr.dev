import React from "react";
import ExternalAnchorTag from "./externalAnchorTag";
import "./project.scss";

const sanitizeLanguage = (language) =>
    language.toLowerCase()
            .replace("#", "sharp")
            .replace(/\+/g, "plus");

export default function Project({ url, language, name, description }) {
    const href = url ? url : `https://github.com/austinrovge/${name}`;

    return (
        <div className="project">
            <ExternalAnchorTag {...{href}}>{name}</ExternalAnchorTag>
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
