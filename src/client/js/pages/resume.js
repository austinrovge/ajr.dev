import React, { Component } from 'react'
import Content from '../components/content'

export default class Resume extends Component {
    render() {
        return (
            <Content>
                <h1>I'm always working hard to learn more.</h1>
                <p>This might not be the most up to date version of my resume, so beware! <a href="/assets/resume.pdf" target="_blank">Click here to view the PDF.</a></p>
                <object data="/assets/resume.pdf" type="application/pdf">
                    <p>Looks like there's something wrong with the embedded PDF, sorry about that! Try clicking on the link above to view it.</p>
                </object>
            </Content>
        )
    }
}
