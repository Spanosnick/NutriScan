import {NavLink, Outlet, useParams, useRouteLoaderData} from "react-router-dom";
import StoreBasic from "../../components/Stores/StoreBasic";
import {StoreDetails} from "../../components/Stores/StoreDetails";
import {updateDocumentById} from "../../firebase";
import {defaultOpenHours} from "../../utils/data";

export function StorePage() {
    const {id} = useParams();
    const data = useRouteLoaderData('store-outlet');
    console.log(data);
    async function addHours(e){
        e.preventDefault();
        const openHours = defaultOpenHours;
      await  updateDocumentById('stores',id,{openHours:openHours},true);
    }

  return (
    <div className=''>
     <StoreDetails data={data}/>
        {/*<button onClick={addHours}>Προσθήκη Ωρών</button>*/}
        <Outlet/>
    </div>

  );
}
