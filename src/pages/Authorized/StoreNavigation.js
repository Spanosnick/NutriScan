import {NavLink, Outlet, useNavigate} from "react-router-dom";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import './StoreNavigation.css';
import {userActions} from "../../features/user/userSlice";
import {useDispatch} from "react-redux";



export function StoreNavigation() {
    const user_dispatch = useDispatch();
    const navigation = useNavigate();

    function logoutHandler(){
        user_dispatch(userActions.logout());
        setTimeout(()=>{
            navigation('/login');
        },2000)

    }
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
                    <button className={'logoutBtn'} onClick={logoutHandler} >Αποσύνδεση</button>

                </div>
            </div>
            <Outlet/>
        </>
    )
        ;
}
