import styles from './ProductItem.module.css'
import CarbIcon from "../../../components/CarbIcon/CarbIcon";

export default function ProductItem({productData}) {
    return (
        <div className={styles.productItem}>
        <p className={styles.productCategory}> {productData.category}</p>
        <div className={styles.productInfoContainer}>
            <h1 className={styles.productTitle}>{productData.name}</h1>
            <p className={styles.productDescription}>{productData.description}</p>
        </div>
        <div className={styles.nutrients_container}>
            <CarbIcon category={'carbs'} value={'200'}/>
            <CarbIcon category={'protein'} value={'200'}/>
            <CarbIcon category={'fat'} value={'200'}/>
        </div>
        <div className={styles.caloriesContainer}>
        <p>Calories: {productData.calories} cal </p>
        </div>
    </div>
    );
}