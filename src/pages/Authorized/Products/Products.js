import styles from './Products.module.css'
import ProductItem from "./ProductItem";
import {dummyProducts} from "../../../utils/data";
export default function Products (){

    // We must get the products with query from firestore
    return (<div className={styles.productsList}>
        {dummyProducts.map((item,index) => <ProductItem key={index} productData={item}/>)}
    </div>);
}