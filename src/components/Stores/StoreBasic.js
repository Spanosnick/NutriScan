import React from 'react';
import styles from './StoreBasic.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.jpg";

export default function StoreBasic({ storeInfos,onDetails,onDelete }) {
    const { address ,city , email, googleMapsLink,image,name, phone ,zip,id } = storeInfos;
    return (
        <div className={styles.storeBasicContainer}>
            <div className={styles.storeCardHead}>
                <div>
                    <h2>{name}</h2>
                    <p>{city} | {zip}</p>
                </div>
                {image && <img className={styles.storeImage} src={image} alt="store"/>}
                {!image && <img className={styles.storeImage} src={logo} alt="Logo"/>}
            </div>
            <div className={styles.storeCardInfos}>
                <div className={styles.storeCardLine}>
                    <img src="https://img.icons8.com/ios/50/000000/address.png" alt="address"/>
                    <a rel='noreferrer' href={googleMapsLink} target='_blank'>{address}</a>
                </div>
                <div className={styles.storeCardLine}>
                    <img src="https://img.icons8.com/ios/50/000000/phone.png" alt="phone"/>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
            </div>
            <div className={styles.actionButtonsContainer}>
                <NavLink to={`${id}`}  className={styles.primaryBtn}>View Store</NavLink>
            </div>

        </div>
    );
}

