import {Outlet, useRouteLoaderData} from "react-router-dom";
import {StoreDetails} from "../../../common/components/Stores/StoreDetails";

export function StorePage() {
    const data = useRouteLoaderData('store-outlet');

    return (
        <div className=''>
            <StoreDetails data={data}/>
            <Outlet/>
        </div>

    );
}
