import styles from './ProductItem.module.css'
import CarbIcon from "../../../components/CarbIcon/CarbIcon";
import {NavLink} from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

export default function ProductItem({productData,editMode}) {
    return (
        <div className={styles.productItem}>
        <NavLink to={`${productData.id}/edit`} className={styles.productEdit}><MdModeEdit /></NavLink>
        <p className={styles.productCategory}> {productData.category}</p>
        <div className={styles.productInfoContainer}>
            <h1 className={styles.productTitle}>{productData.name}</h1>
            <p className={styles.productDescription}>{productData.description}</p>
        </div>
        <div className={styles.nutrients_container}>
            <CarbIcon category={'carbs'} value={productData.carbs}/>
            <CarbIcon category={'protein'} value={productData.protein}/>
            <CarbIcon category={'fat'} value={productData.fat}/>
        </div>
        <div className={styles.caloriesContainer}>
        <p>Calories: {productData.calories} cal </p>
        </div>
    </div>
    );
}