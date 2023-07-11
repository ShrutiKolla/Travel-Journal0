import React from 'react';

// css
import navCss from '../assets/css/nav.module.css';

// imgs
import globe from '../assets/imgs/globe.svg';
export default function Nav() {
    return(
        <nav className={navCss.nav}>
            <img src={globe} alt="" />
            <h3 className={navCss.nav__title}>my travel journal.</h3>
        </nav>
    );
}