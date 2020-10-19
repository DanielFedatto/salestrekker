import React, { Component } from 'react'
import Folder from '../../images/folder.svg'
import User from '../../images/user.svg'
import Monitor from '../../images/monitor.svg'
import Settings from '../../images/settings.svg'

function Box(props) {
    return (
        <div className="about-box">
            <i>
                <img src={props.icon}/>
            </i>
            <h5>
                {props.title}
            </h5>
            <p>
                {props.text}
            </p>
        </div>

    )
}
  
function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="about-controller">
                    <Box
                        icon={Folder} 
                        title="Organize"
                        text="Organise your leads pipeline, ongoing framework and projects using visual workflow and project boards."
                    />
                    <Box 
                        icon={User} 
                        title="Collaborate"
                        text="Collaborate with your team members and partners using deal notes, task, live chat and visual status tools."
                    />
                    <Box
                        icon={Monitor} 
                        title="Connect"
                        text="Connect with clients using integrated VoIP phone, SMS, E-Mail, live chat and Client Portal."
                    />
                    <Box 
                        icon={Settings} 
                        title="Automate"
                        text="Allocate tasks, create notifications, updates and reminders and produce documents with workflow automation."
                    />
                </div>
            </div>
        </section>
    );
}

export default About;