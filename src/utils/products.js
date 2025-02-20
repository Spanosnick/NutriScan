import {redirect} from "react-router-dom";
import {addDoc , collection} from "firebase/firestore";
import {db, auth, getDocumentById, dynamicFirestoreQuery} from "../firebase";
const storesCollectionRef = collection(db, "stores");
const productsCollectionRef = collection(db, "products");


export async function productDetailsLoader({request,params}){
    // 1) we collect in array  the ids of the store's about a user
    let firstCondition = [["userId","==", auth.currentUser.uid,]]
    const storesDocuments =await dynamicFirestoreQuery(storesCollectionRef,firstCondition);
    console.log(storesDocuments);
    const storeIds = storesDocuments.map((doc)=> doc.id);

    // 2) we make the query about these ids to return the products documents
    const secondConditions = [["store_id","in", storeIds]];
    const products = await dynamicFirestoreQuery(productsCollectionRef,secondConditions);
    return products;
}

