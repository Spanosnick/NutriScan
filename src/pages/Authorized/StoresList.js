import {Link, Outlet, useNavigate} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import StoreBasic from "../../components/Stores/StoreBasic";
import {useEffect, useState} from "react";
import {dummyStores} from "../../utils/data";
import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import {db} from "../../firebase";


export function StoresList() {
    const [stores, setStores] = useState(dummyStores);
    const storesCollectionRef = collection(db, "stores");
    const navigation = useNavigate();

    useEffect(() => {
        async function getStores() {

            try {
                const data = await getDocs(storesCollectionRef);
                const filteredData = data.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setStores(filteredData);

            } catch (e) {
                console.error("Error getting documents: ", e);

            }
        }

        getStores();
    }, [deleteStore]);


    async function deleteStore(id) {
        console.log("Delete Store with id: ", id);
        const storeDoc = doc(db, "stores", id);
        await deleteDoc(storeDoc);
    }

    function details(id) {
        console.log("Details for store with id: ", id);
        const idString = id.toString();
        navigation('/app/stores/' + idString);
    }


    return <div>
        <div className='p-4 d-flex justify-content-start align-content-center flex-wrap '>
            {stores.map((store) => <StoreBasic key={store.id} storeInfos={store} onDetails={details}
                                               onDelete={deleteStore}/>)
            }
        </div>
        <Outlet/>
    </div>;
}
