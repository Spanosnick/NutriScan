import React, {useEffect, useState} from 'react';
import styles from './EditStore.module.css';
import {Input} from "../../../common/components/Input/Input";
import {addDoc, collection} from "firebase/firestore";
import {auth, db, deleteDocumentById, dynamicFirestoreQuery, setDocumentById} from "../../../firebase";
import {HoursAddition} from "../../../common/components/HoursAddition/HoursAddition";
import {defaultOpenHours} from "../../../common/utils/data";
import {Loading} from "../../../common/components/Loading/Loading";
import {useNavigate, useParams, useRouteLoaderData} from "react-router-dom";
import UploadImage from "../../../common/components/UploadImage/UploadImage";
import Products, {ProductModal} from "../../Product/views/Products/Products";


export default function CreateStore({editMode = false}) {
    const [errors, setErrors] = useState(null);
    const {id} = useParams();
    // if we are in edit mode we need to get the data from the store
    const data = useRouteLoaderData('store-outlet');
    const newStoreObject = data ? data : {
        name: '',
        phone: '',
        address: '',
        city: '',
        email: '',
        zip: '',
        image: '',
        googleMapLink: '',
        userId: auth?.currentUser?.uid,
        openHours: defaultOpenHours,
        facebook: '',
        instagram: '',
        isActive: true
    };
    const [newStore, setNewStore] = useState(newStoreObject);
    const [loadingCreate, setLoadingCreate] = useState(false);
    const [storeProducts, setStoreProducts] = useState([]);
    const navigation = useNavigate();
    const storesCollectionRef = collection(db, "stores");
    const productsCollectionRef = collection(db, "products");

    async function fetchStoreProducts() {

        if (editMode) {
            setLoadingCreate(true);
            // get the products of the store
            const conditions = [['store_id', "==", id]];
            try {
                const products = await dynamicFirestoreQuery(productsCollectionRef, conditions);

                setStoreProducts(products)
            } catch (e) {
                console.log(e);
            }
            setLoadingCreate(false);
        }

    }

    useEffect(() => {

        fetchStoreProducts();
    }, [])


    async function storeActionHandler() {
        setLoadingCreate(true);
        try {
            if (!editMode) {
                await addDoc(storesCollectionRef, newStore);
            } else {
                // update the store
                await setDocumentById('stores', id, newStore);
            }
            navigation('/app/stores/');
        } catch (e) {
            console.log(e.message)
            setErrors(e.message);
        }
        setLoadingCreate(false);
    }

    function getOpenHours(hours) {
        setNewStore({...newStore, openHours: hours});
    }

    function inputsHandler(e) {
        const {name, value} = e.target;
        setNewStore({...newStore, [name]: value});

    }

    async function deleteStoreHandler() {
        setLoadingCreate(true);
        try {
            await deleteDocumentById('stores', id);
            navigation('/app/stores/');
        } catch (e) {
            console.log(e.message);
            setErrors(e.message);
        }

    }

    async function createStoreProduct(product) {
        // create an object with the store_id and spread the product
        const newProduct = {
            ...product,
            store_id: id,
        }
        try {
            if (editMode) {
                await addDoc(productsCollectionRef, newProduct);
                alert('Product created successfully.');
                fetchStoreProducts();
            }


        } catch (e) {
            console.log(e.message);
        }

    }

    if (loadingCreate) {
        return <Loading/>;
    }


    return (
        <div className={styles.editContainer}>
            <div className={styles.editCard}>
                <h1>{!editMode ? 'Δημιουργία' : 'Επεξεργασία'} Καταστήματος</h1>
                <div className={styles.imageContainer}>
                    <UploadImage documentId={id} defaultImage={editMode ? newStore.image : null}/>
                </div>
                <div className={styles.editInputsContainer}>
                    <Input label='Όνομα' type='text' placeholder='Όνομα' value={newStore.name} onChange={inputsHandler}
                           inputName={'name'}/>
                    <Input label='Τηλέφωνο' type='text' placeholder='Τηλέφωνο' value={newStore.phone}
                           onChange={inputsHandler} inputName={'phone'}/>
                    <Input label='Διεύθυνση' type='text' placeholder='Διεύθυνση' value={newStore.address}
                           onChange={inputsHandler} inputName={'address'}/>
                    <Input label='Πόλη' type='text' placeholder='Πόλη' value={newStore.city} onChange={inputsHandler}
                           inputName={'city'}/>
                    <Input label='Email' type='email' placeholder='Email' value={newStore.email}
                           onChange={inputsHandler} inputName={'email'}/>
                    <Input label='Ταxυδρομικός Κώδικας' type='text' placeholder='TK' value={newStore.zip}
                           onChange={inputsHandler} inputName={'zip'}/>
                    {/*<Input label='Εικόνα' type='file' placeholder='Εικόνα' value='' onChange={inputsHandler}/>*/}
                    <Input label='Google Map Link' type='text' placeholder='Google Map Link'
                           value={newStore.googleMapLink} onChange={inputsHandler} inputName={'googleMapLink'}/>
                    <Input label='Facebook' type='text' placeholder='Facebook' value={newStore.facebook}
                           onChange={inputsHandler} inputName={'facebook'}/>
                    <Input label='Instagram' type='text' placeholder='Instagram' value={newStore.instagram}
                           onChange={inputsHandler} inputName={'instagram'}/>
                    <HoursAddition defaultHours={newStore.openHours} onSubmit={getOpenHours}/>
                    <div>
                        <h1>Προιόντα</h1>
                        <ProductModal onCreate={createStoreProduct}/>
                        <Products products={storeProducts}/>
                        <button onClick={()=>navigation('/app/products')}>All Products</button>
                    </div>

                    <div className={styles.errorDiv}>
                        {errors != null && <p>{errors} </p>}
                    </div>
                    <button disabled={loadingCreate}
                            onClick={storeActionHandler}>{!editMode ? 'Δημιουργία' : 'Ενημέρωση'} Καταστήματος
                    </button>
                    {editMode && <button disabled={loadingCreate} className={styles.deleteBtn}
                                         onClick={deleteStoreHandler}>Διαγραφή Καταστήματος</button>}
                </div>

            </div>
        </div>
    )
}
