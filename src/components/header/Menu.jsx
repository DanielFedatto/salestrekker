import React, { Component } from 'react'

function Links(props) {
    return (
        <li>
            <a href={props.href} title={props.title}>{props.title}</a>
        </li>
    )
}

function Menu() {
    
    return (
        <ul className="mainMenu">
            <Links href="#" title="Home"/>
            <Links href="#about" title="About"/>
            <Links title="Features"/>
            <Links title="Pricing"/>
            <Links title="Contact"/>
        </ul>
    );
}

export default Menu;