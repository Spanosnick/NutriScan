import React from 'react';
import styles from './EditStore.module.css';
import {Input} from "../../components/Input/Input";
import {useParams, useRouteLoaderData} from "react-router-dom";
import {StoreDetails} from "../../components/Stores/StoreDetails";
import CreateStore from "./CreateStore";


export default function EditStore() {
    const {id} = useParams();
    const data = useRouteLoaderData('store-outlet');
    console.log(data);
    return (
        <div  className={styles.editContainer}>
            <CreateStore editMode={true}/>
        </div>
    )
}

