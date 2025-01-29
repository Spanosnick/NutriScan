import {NavLink, Outlet, useParams, useRouteLoaderData} from "react-router-dom";
import StoreBasic from "../../components/Stores/StoreBasic";
import {StoreDetails} from "../../components/Stores/StoreDetails";

export function StorePage() {
    const {id} = useParams();
    const data = useRouteLoaderData('store-outlet');
    console.log(data);
  return (
    <div className='d-flex justify-content-center align-content-center flex-wrap'>
     <StoreDetails data={data}/>
        <Outlet/>
    </div>

  );
}
