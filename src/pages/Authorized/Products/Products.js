import styles from './Products.module.css'
import ProductItem from "./ProductItem";
import {dummyProducts} from "../../../utils/data";
import {useRef,forwardRef} from "react";
import {Input} from "../../../components/Input/Input";


export default function Products() {

    // We must get the products with query from firestore
    return (<div className={styles.productsList}>
        {dummyProducts.map((item, index) => <ProductItem key={index} productData={item}/>)}
    </div>);
}

export function ProductModal({editMode = false, productInfo}) {

    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };



   return (
        <div className={styles.productModalContainer}>
            <button className={styles.addProductModalBtn} onClick={openModal}>
                +
            </button>
            <dialog ref={modalRef} className={styles.productModal}  >
                <div className={styles.productModalInfos} >
                    <h1>Δημιουργία Προιόντος</h1>
                    <Input type={"text"} label={'Τίτλος'} generalStyle={styles.productModalInfosInput}  />
                    <Input type={"text"} label={'Περιγραφή'} generalStyle={styles.productModalInfosInput}  />
                    <select>
                        <option selected disabled>Επιλογή Κατηγορίας</option>
                        <option value='wrap'>Αραβική</option>
                        <option value='Sandwitch'>Σαντουιτς</option>
                        <option value='Toast'>Τοστ</option>
                        <option value='Sweet'>Γλυκό</option>
                    </select>
                    <div className={styles.nutrientsDataContainer}>
                        <Input type={'number'} label={'Πρωτείνή'} />
                        <Input type={'number'} label={'Λιπαρά'} />
                        <Input type={'number'} label={'Υδατανθρακες'} />
                        <Input type={'number'} label={'Συνολικές Θερμίδες'} />
                    </div>
                    <button>Υποβολή </button>
                </div>
            </dialog>
        </div>
    )
}