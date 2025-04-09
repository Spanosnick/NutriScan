import React, {useEffect} from 'react';
import styles from './EditStore.module.css';
import {useNavigate, useRouteLoaderData} from "react-router-dom";
import CreateStore from "./CreateStore";
import {auth} from "../../../firebase";

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

