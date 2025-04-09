import {Outlet, useNavigate} from "react-router-dom";
import StoreBasic from "../../../common/components/Stores/StoreBasic";
import {useEffect, useState} from "react";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {Loading} from "../../../common/components/Loading/Loading";


export function StoresList() {
    const [stores, setStores] = useState({});
    const [loading, setLoading] = useState(true);
    const storesCollectionRef = collection(db, "stores");
    const navigation = useNavigate();
    async function getStores() {
        try {
            const data = await getDocs(storesCollectionRef);
            const filteredData = data.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setStores(filteredData);
            setLoading(false);
        } catch (e) {
            console.error("Error getting documents: ", e);

        }
    }
    useEffect(() => {
        getStores();
    }, []);


    async function deleteStore(id) {
        console.log("Delete Store with id: ", id);
        const storeDoc = doc(db, "stores", id);
        await deleteDoc(storeDoc);
        getStores();
    }

    function details(id) {
        console.log("Details for store with id: ", id);
        const idString = id.toString();
        navigation('/app/stores/' + idString);
    }

    if (loading) {
        return   <Loading/>;
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
