import React from "react";
import { graphql } from "gatsby";
import Project from "../components/project";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Projects({ data: { github: { viewer: { pinnedItems }}, allMarkdownRemark: { edges }}}) {
    return (
        <Layout>
            <SEO title="Projects" />
            <h1>Here's some stuff I've worked on.</h1>
            <div>
                <p>This isn't all of my projects that I've worked on, just some that I like!</p>
            </div>
            <div className="projects">
                {pinnedItems.edges.map(({ node: { url, name, primaryLanguage, description } }, i) => (
                    <Project
                        key={i}
                        href={url}
                        name={name}
                        language={primaryLanguage ? primaryLanguage.name : ""}
                        description={description}
                    />
                ))}
                {edges.map(({ node: { rawMarkdownBody, frontmatter: { link, title, language } } }, i) => (
                    <Project
                        key={i}
                        href={link}
                        name={title}
                        language={language}
                        description={rawMarkdownBody}
                    />
                ))}
            </div>
        </Layout>
    );
}

export const projectsQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                  rawMarkdownBody
                  frontmatter {
                    title
                    language
                    link
                  }
                }
            }
        }
        
        github {
            viewer {
                pinnedItems(first: 6) {
                    edges {
                        node {
                            ... on GitHub_Repository {
                                name
                                url
                                description
                                primaryLanguage {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
