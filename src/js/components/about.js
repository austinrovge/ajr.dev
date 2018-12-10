import React, { Component } from 'react';
import Content from './layout/content'

export default class About extends Component {
    render() {
        return (
            <Content>
                <h1>Hi, I'm Austin.</h1>
                <img className="austin-photo" src="/assets/austin.jpg" alt="A picture of me" />
                <div>
                    <p>I'm a college student who's working on learning more about programming.</p>
                    <p>I first started programming in middle school when I discovered the <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank">Codeacademy course on JavaScript</a>. Within an hour of starting the course, I was proudly showing my mom the basic for loops I made!</p>
                    <p>In high school, I joined robotics to help program robots in C++, but I ended up switching gears and helping out with the team's web department. I helped work on <a href="https://atthecontrol.com" target="_blank">At The Control</a>, a streaming service for <a href="https://www.firstinspires.org/robotics/frc" target="_blank">FIRST Robotics Competition</a> events.</p>
                    <p>After graduating from high school, I went to the <a href="https://www.msoe.edu" target="_blank">Milwaukee School of Engineering</a> to major in software engineering.</p>
                    <p>This website has some information about me and projects I've worked on, but I mostly use it to try out new web technologies!</p>
                </div>
            </Content>
        )
    }
}
