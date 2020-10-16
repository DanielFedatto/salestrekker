import React, { Component } from 'react'

class Menu extends Component {
    render () {
        return (
            <ul id="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        )
    }
}

export default Menu;