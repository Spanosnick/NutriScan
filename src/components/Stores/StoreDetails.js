import style from './StoreDetails.module.css';
import Button from "bootstrap/js/src/button";
import {auth} from "../../firebase";

export function StoreDetails({data}) {
    console.log(data);
    const {address ,city , email, googleMapsLink,image,name, phone ,zip,id,userId } = data;

    return (
        <div className={style.storeDetailsContainer}>
            <h1>{data.name}</h1>
            <h1>{data.name}</h1>


        {/*Do not render the edit Button if has no authority to edit the store*/}
            {userId === auth?.currentUser?.uid && <button>Επεξεργασία</button>}
        </div>
    )
}
