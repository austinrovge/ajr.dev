import React from "react";
import "./experienceitem.scss";

export default function ExperienceItem({ org, position, description }) {
    return (
        <div className="experience-item">
            <h1>{position}, {org}</h1>
            <p>{description}</p>
        </div>
    );
}
