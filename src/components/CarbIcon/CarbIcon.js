
import {MdFastfood} from "react-icons/md";
import {FaBowlFood} from "react-icons/fa6";
import {MdOutlineFoodBank} from "react-icons/md";
import styles from "./CarbIcon.module.css";

export default function CarbIcon({category, value}) {
    let categoryIcon = ''
    if (category === 'protein') {
        categoryIcon = <FaBowlFood/>
    } else if (category === 'carbs') {
        categoryIcon = <MdOutlineFoodBank/>
    } else {
        categoryIcon = <MdFastfood/>
    }
    return (<div className={styles.carbIconContainer}>
        {categoryIcon}
        <p>{value}</p>
    </div>)
}