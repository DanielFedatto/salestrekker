import React, { Component } from 'react'
import Header from './header/Header'
import Banners from './banner/Banner'
import About from './sections/About'
import Video from './sections/Video'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


function Index() {
    
    return (
        <main>
            <Header />
            <Banners />
            <About />
            <Video />
            <Contact />
            <Footer />
        </main>
    )
}

export default Index;