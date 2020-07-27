import React from "react";
import { graphql } from "gatsby";
import Project from "../components/project";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Projects({ data }) {
    return (
        <Layout>
            <SEO title="Projects" />
            <h1>Here's some stuff I've worked on.</h1>
            <div>
                <p>This isn't all of my projects that I've worked on, just some that I like!</p>
            </div>
            <div className="projects">
                {
                    data.github.user.pinnedRepositories.edges.map(({ node: { url, name, primaryLanguage, description } }, i) => (
                        <Project key={i}
                            name={name}
                            language={primaryLanguage ? primaryLanguage.name : ""}
                            description={description}
                        />
                    ))
                }
                {
                    data.allMarkdownRemark.edges.map(({ node: { rawMarkdownBody, frontmatter: { link, title, language } } }, i) => (
                        <Project key={i}
                            url={link}
                            name={title}
                            language={language}
                            description={rawMarkdownBody}
                        />
                    ))
                }
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
            user(login: "austinrovge") {
                pinnedRepositories(first: 6) {
                    totalCount
                    edges {
                        node {
                            name
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
`;
