import React, { Component } from 'react'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2>GET IN TOUCH WITH US</h2>
                <p>Still have questions? Please feel free to contact us.</p>
            </div>
            <ContactForm />
        </section>
    )
}

export default Contact;