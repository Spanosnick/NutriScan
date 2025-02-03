import React, {useState} from 'react';
import styles from './EditStore.module.css';
import {Input} from "../../components/Input/Input";
import {addDoc , collection} from "firebase/firestore";
import {db,auth} from "../../firebase";
import {HoursAddition} from "../../components/HoursAddition/HoursAddition";


export default function CreateStore() {
    const [errors,setErrors] = useState();
    const [newStore,setNewStore] = useState(
        {
            name:'',
            phone:'',
            address:'',
            city:'',
            email:'',
            zip:'',
            image:'',
            googleMapLink:'',
            userId:auth?.currentUser?.uid
        }
    );
    const storesCollectionRef = collection(db, "stores");

    async function createStore(){
        try {
            const response = await addDoc(storesCollectionRef,newStore);
            console.log(response);

        }catch (e) {
            console.log(e)
            setErrors(e.message);

        }


    }
    function inputsHandler(e){
        const {name,value} = e.target;
        console.log(name,value);
        setNewStore({...newStore,[name]:value});

    }
    return (
        <div  className={styles.editContainer}>
            <div className={styles.editCard}>
                <h1>Δημιουργία Καταστήματος</h1>
                <div className={styles.editInputsContainer}>
                    <Input label='Όνομα' type='text' placeholder='Όνομα' value={newStore.name} onChange={inputsHandler} inputName={'name'}/>
                    <Input label='Τηλέφωνο' type='text' placeholder='Τηλέφωνο' value={newStore.phone} onChange={inputsHandler}  inputName={'phone'}/>
                    <Input label='Διεύθυνση' type='text' placeholder='Διεύθυνση' value={newStore.address} onChange={inputsHandler} inputName={'address'}/>
                    <Input label='Πόλη' type='text' placeholder='Πόλη' value={newStore.city} onChange={inputsHandler} inputName={'city'}/>
                    <Input label='Email' type='email' placeholder='Email' value={newStore.email} onChange={inputsHandler} inputName={'email'}/>
                    <Input label='Ταxυδρομικός Κώδικας' type='text' placeholder='TK' value={newStore.zip} onChange={inputsHandler} inputName={'zip'}/>
                    {/*<Input label='Εικόνα' type='file' placeholder='Εικόνα' value='' onChange={inputsHandler}/>*/}
                    <Input label='Google Map Link' type='text' placeholder='Google Map Link' value={newStore.googleMapLink} onChange={inputsHandler} inputName={'googleMapLink'}/>
                    <HoursAddition/>
                    <div className={styles.errorDiv}>
                        {errors && <p>{errors} </p>}
                    </div>
                    <button disabled={false} onClick={createStore}>Υποβολή Καταστήματος</button>
                </div>

            </div>
        </div>
    )
}
