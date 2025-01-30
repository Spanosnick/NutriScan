import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

// Initialize Firebase
export const auth = app.auth()
export default app

export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();


export async function getDocumentById(collectionName, docId) {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }
}

export async function deleteDocumentById(collectionName, docId) {
    try {
        await db.collection(collectionName).doc(docId).delete();
        console.log(`Document '${docId}' deleted successfully.`);
    } catch (error) {
        console.error("Error deleting document:", error);
    }
}

export async function updateDocumentById(collectionName, docId, updatedData) {
    try {
        await db.collection(collectionName).doc(docId).update(updatedData);
        console.log(`Document '${docId}' updated successfully.`);
    } catch (error) {
        console.error("Error updating document:", error);
    }
}
