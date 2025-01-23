import {NavLink, Outlet} from "react-router-dom";
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
                    <button className={'logoutBtn'}  >Αποσύνδεση</button>

                </div>
            </div>
            <Outlet/>
        </>
    )
        ;
}
