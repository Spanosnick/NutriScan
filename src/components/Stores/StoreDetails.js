import style from './StoreDetails.module.css';
import Button from "bootstrap/js/src/button";
import {auth} from "../../firebase";
import {NavLink} from "react-router-dom";

export function StoreDetails({data}) {
    console.log(data);
    const {address ,city , email, googleMapLink,image,name, phone ,zip,id,userId } = data;

    return (
        <div className={style.storeDetailsContainer}>
            <h1>{data.name}</h1>

        {/*Do not render the edit Button if has no authority to edit the store*/}
            {userId === auth?.currentUser?.uid && <NavLink to={'edit'}>Επεξεργασία</NavLink>}
        </div>
    )
}
