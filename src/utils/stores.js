import {redirect} from "react-router-dom";
import {addDoc , collection} from "firebase/firestore";
import {db,auth,getDocumentById} from "../firebase";

export async function storeDetailsLoader({request,params}){
    const {id} = params;
    const data = await getDocumentById('stores',id);
    return data;
}

export async function storeDeleteAction({request,params}){
    const {method} = request; // DELETE
    const {id} = params;
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: method
    });
    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Failed to delete event'}), {status: 500});
    }else {
        return redirect('/events');
    }

}
