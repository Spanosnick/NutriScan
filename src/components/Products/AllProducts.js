import {useRouteLoaderData} from "react-router-dom";
import Products from "../../pages/Authorized/Products/Products";


export function AllProducts(){
    const data = useRouteLoaderData('products-outlet');
    return (<div>
       <Products products={data} />
    </div>)
}