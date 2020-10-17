import React, { Component } from 'react'
import LogoWhite from '../../images/logo-white.png'
import LogoDark from '../../images/logo-dark.png'

function Logo() {
    return (
        <figure className="logo">
            <a href="#" title="Salestrekker">
                <img src={LogoWhite}/>
            </a>
        </figure>
    )
}

export default Logo;