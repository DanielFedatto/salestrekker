import React from 'react'

import { useStickyHeader } from "react-use-sticky-header";

import Logo from './Logo'
import Menu from './Menu'



function Header() {
    const [setHeaderRef] = useStickyHeader(60, { 
        headerDetached: 'is-sticky',
        headerAttached: "sticky"
    });
    return (
        <header ref={setHeaderRef}>
            <Logo />
            <Menu />
        </header>
    );
}

export default Header;