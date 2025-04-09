import {useRouteLoaderData} from "react-router-dom";
import Products from "../../../features/Product/views/Products/Products";


export function ProductsPage(){
    const data = useRouteLoaderData('products-outlet');
    return (<div>
        <h1>Products Page</h1>
       <Products editMode={true} products={data} />
    </div>)
}
