import React, { Component } from 'react'
import Mail from '../../images/mail.svg'
import Phone from '../../images/phone.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footerControll">
                    <div className="footerBoxL">
                        <p>Copyright © 2016-2020. All rights reserved Salestrekker Pty Ltd.</p>
                        <a href="https://salestrekker.com/terms-of-use.html" target="_blank">
                            Terms of use
                        </a><span>|</span>
                        <a href="https://salestrekker.com/privacy-policy.html" target="_blank">
                            Privacy policy
                        </a>
                    </div>
                    <div className="footerBoxR">
                        <ul>
                            <li>
                                <i className="icon">
                                    <img src={Mail}/>
                                </i>
                                <a href="malito:office@salestrekker.com">office@salestrekker.com</a>
                            </li>
                            <li>
                                <i className="icon">
                                    <img src={Phone}/>
                                </i>
                                <a href="tel:+610290377350">+61 02 9037 7350</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;