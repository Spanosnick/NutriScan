import {NavLink, Outlet, useNavigate} from "react-router-dom";
import './StoreNavigation.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../Login/slice/authSlice";


export function StoreNavigation() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function logoutHandler(){
        console.log('Logout');
        setError('');
        try {
            dispatch(logoutUser());
            navigate('/login');

        }catch (e){
            setError('Failed to logout');
            console.log(e);
        }

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
                    <NavLink to={'create'} relative={"path"}>Δημιουργία</NavLink>
                    <button onClick={logoutHandler} className={'logoutBtn'}  >Αποσύνδεση</button>
                </div>
            </div>
            {error && <div className='error-message'>{error}</div>}
            <Outlet/>
        </>
    )
        ;
}
