import React from 'react';
import styles from './StoreBasic.module.css';
import {NavLink} from "react-router-dom";

export default function StoreBasic({ storeInfos }) {
    const { name, address, phone, email, image,id } = storeInfos;
    return (
        <div className={styles.storeBasicContainer}>
            <div className={styles.storeCardHead}>
                <div>
                    <h2>{name}</h2>
                    <p>Chalkida</p>
                </div>
                <img className={styles.storeImage} src={image} alt="store"/>
            </div>
            <div className={styles.storeCardInfos}>
                <div className={styles.storeCardLine}>
                    <img src="https://img.icons8.com/ios/50/000000/address.png" alt="address"/>
                    <a rel='noreferrer' href={address} target='_blank'>{address}</a>
                </div>
                <div className={styles.storeCardLine}>
                    <img src="https://img.icons8.com/ios/50/000000/phone.png" alt="phone"/>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
            </div>
            <NavLink to={`/store/${id}`} className={styles.storeButton}>View Store</NavLink>
        </div>
    );
}

