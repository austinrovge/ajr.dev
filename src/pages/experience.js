import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExperienceItem from "../components/experienceitem";
import "./experience.scss";

const experienceItemList = [
    {
        org: "Direct Supply",
        position: "Software Engineer",
        description: "This is my first full time job doing full stack development!"
    },
    {
        org: "Direct Supply",
        position: "Software Engineer Intern",
        description: "This was my first internship where I learned a lot about working on an engineering team and about microservices!"
    },
    {
        org: "MSOE SDL",
        position: "Student Developer",
        description: "I participated on this software engineering team for all of my junior year. We worked with the Medical College of Wisconsin on coming up with a simulator for subjects finding a point in 3D space!"
    }
];

export default function Experience() {
    return (
        <Layout>
            <SEO title="Experience" />
            <h1>I'm always working hard to learn more.</h1>
            <p>Here's a direct <a href="/resume.pdf" target="_blank">link to my resume!</a></p>
            <p>Listed below are some positions that are great highlights of my experiences so far!</p>
            <div className="experience-listings">
                {experienceItemList.map((props, i) => <ExperienceItem key={i} {...props} />)}
            </div>
        </Layout>
    );
}
