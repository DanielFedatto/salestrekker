import React, { Component } from 'react'
import Play from '../../images/play.svg'

function Video() {
    return (
        <section id="video">
            <i className="icon">
                <img src={Play}/>
            </i>
            <h2>Take a tour of Salestrekker</h2>
        </section>
    )
}

export default Video;