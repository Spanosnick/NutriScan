import React, {useEffect} from 'react';
import styles from './EditStore.module.css';
import {NavLink, useNavigate, useRouteLoaderData} from "react-router-dom";
import CreateStore from "./CreateStore";
import {auth} from "../../firebase";
import style from "../../components/Stores/StoreDetails.module.css";
import {FaEdit} from "react-icons/fa";

export default function EditStore() {
    const data = useRouteLoaderData('store-outlet');
    const navigation = useNavigate();
    useEffect(()=>{
        if (data.userId !== auth.currentUser.uid){
            navigation('/app/stores/');
        }
    },[])

    return (
        <div  className={styles.editContainer}>
            <CreateStore editMode={true}/>
        </div>
    )
}

