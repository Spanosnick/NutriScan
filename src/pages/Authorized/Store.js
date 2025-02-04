import {NavLink, Outlet, useParams, useRouteLoaderData} from "react-router-dom";
import StoreBasic from "../../components/Stores/StoreBasic";
import {StoreDetails} from "../../components/Stores/StoreDetails";
import {updateDocumentById} from "../../firebase";
import {defaultOpenHours} from "../../utils/data";

export function StorePage() {
    const data = useRouteLoaderData('store-outlet');

    return (
        <div className=''>
            <StoreDetails data={data}/>
            <Outlet/>
        </div>

    );
}
