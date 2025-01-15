import React from "react";
import "./Header.css";
import {Link, NavLink} from "react-router-dom";


export function Header() {
    return (
        <div className='nutriNav'>
            <div className='firstPart'>
                <a className='nutriScanTitle' href='#home'>Nutri<span>Scan</span></a>
            </div>
            <div className='secondPart'>
                <a  href='#about'>Τί είναι </a>
                <a href='#benefits'>Πως Βοηθάει </a>
                <a href='#contact'>Επικοινωνία</a>
                <NavLink className='loginBtn' to={'login'}>Σύνδεση</NavLink>
                {/*<a className='cta'  href='#login'>Σύνδεση</a>*/}
            </div>
        </div>
    );
}
