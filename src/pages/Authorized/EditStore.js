import React from 'react';
import styles from './EditStore.module.css';
import {Input} from "../../components/Input/Input";


export default function EditStore() {
    return (
        <div  className={styles.editContainer}>
            <div className={styles.editCard}>
                <h1>Επεξεργασία Καταστήματος</h1>
                <div className={styles.editInputsContainer}>
                    <Input label='Όνομα' type='text' placeholder='Όνομα' value='' onChange={()=>{}}/>
                    <Input label='Τηλέφωνο' type='text' placeholder='Τηλέφωνο' value='' onChange={()=>{}}/>
                    <Input label='Διεύθυνση' type='text' placeholder='Διεύθυνση' value='' onChange={()=>{}}/>
                    <Input label='Περιγραφή' type='text' placeholder='Περιγραφή' value='' onChange={()=>{}}/>
                    <Input label='Εικόνα' type='file' placeholder='Εικόνα' value='' onChange={()=>{}}/>
                </div>

            </div>
        </div>
    )
}
