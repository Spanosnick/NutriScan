import style from './StoreDetails.module.css';
import Button from "bootstrap/js/src/button";
import {auth} from "../../firebase";
import {NavLink} from "react-router-dom";
import {DisplayAvailableHours} from "../HoursAddition/HoursAddition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FaEdit } from "react-icons/fa";

export function StoreDetails({data}) {
    const {address, city, email, googleMapLink, image, name, phone, zip, id, userId, openHours, socialMedia} = data;

    return <div className={style.storeDetailsContainer}>
        {/*Do not render the edit Button if has no authority to edit the store*/}
        {userId === auth?.currentUser?.uid && <div className={style.editContainer}> <NavLink  to={'edit'}><FaEdit /></NavLink> </div>}
        <h1 className={style.storeName}>{name}</h1>
        <div className={style.storeInfoContainer}>

            <div className={style.storeInfo}>
                <p><b>Διεύθυνση:</b> {address} </p>
                <p><b>Πόλη:</b>{city}</p>
                <p><b>Ταχυδρομικός Κώδικας:</b>{zip}</p>
                <p><b>Τηλ Επικοινωνίας:</b>{phone}</p>
                <p><b>Email:</b>{email}</p>
                <a href={googleMapLink} target='_blank'>Οδηγίες Χάρτη</a>
            </div>
        </div>
        <div className={style.storeOpenHoursContainer}>
            <DisplayAvailableHours styleTable={style.hoursTable} hours={openHours}/>
        </div>
    </div>
}

