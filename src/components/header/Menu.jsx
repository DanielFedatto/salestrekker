import React, { Component } from 'react'

function Links(props) {
    return (
        <li>
            <a href={props.link} title={props.title}>{props.title}</a>
        </li>
    )
}
  
function Menu() {
    return (
        <ul className="mainMenu">
            <Links link="#" title="Home"/>
            <Links link="#" title="About"/>
            <Links link="#" title="Features"/>
            <Links link="#" title="Pricing"/>
            <Links link="#" title="Contact"/>
        </ul>
    );
}

export default Menu;