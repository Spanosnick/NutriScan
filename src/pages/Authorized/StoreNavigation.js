import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import './StoreNavigation.css';


export function StoreNavigation() {
    return (
        <>
            <div className='nutriNav alternative'>
                <div className='firstPart'>
                    <a className='nutriScanTitle' href='#home'>Nutri<span>Scan</span></a>
                </div>
                <div className='secondPart'>
                    <NavLink to={''}>Αρχική</NavLink>
                    <NavLink to={'stores'}>Καταστήματα</NavLink>
                    <NavLink to={'/store/1'}>Επεξεργασία</NavLink>
                    <NavLink className={'logoutBtn'} to={'/store/1'}>Αποσύνδεση</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    )
        ;
}
