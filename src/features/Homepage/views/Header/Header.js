import React from "react";
import "../../../../common/components/Menu/Header.css";
import {Menu} from "../../../../common/components/Menu/menu";


export function Header() {
    const menuItems = [
        {name: 'Τί είναι', link: '#about',className: 'menuItem'},
        {name: 'Πως Βοηθάει', link: '#benefits',className: 'menuItem'},
        {name: 'Επικοινωνία', link: '#contact',className: 'menuItem'},
        {name: 'Σύνδεση', link: 'login',className: 'loginBtn-alternative', isButton: true},
    ]
    return (
        <Menu  menuItems={menuItems} mobileView={768} />
    );
}
