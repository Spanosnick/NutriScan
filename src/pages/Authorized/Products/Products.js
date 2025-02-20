import styles from './Products.module.css'
import ProductItem from "./ProductItem";
import {dummyProducts} from "../../../utils/data";
import {useRef, forwardRef, useState, useEffect} from "react";
import {Input} from "../../../components/Input/Input";


export default function Products({products = dummyProducts,editMode = false}) {

    // We must get the products with query from firestore
    return (<div className={styles.productsList}>
        { products.length > 0  && products.map((item, index) => <ProductItem key={index} editMode={editMode} productData={item}/>)}
    </div>);
}

export function ProductModal({editMode = false, productInfo,onCreate}) {

    const defaultProductData = productInfo === undefined ? {
        name: "",
        description: "",
        category: "",
        protein: "",
        fat : "",
        carbs: "",
        calories: "",
    } : productInfo;
    const [product, setProduct] = useState(defaultProductData);
    const nameRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const proteinRef = useRef();
    const fatRef = useRef();
    const carbsRef = useRef();
    const caloriesRef = useRef();

    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };

    function submitProductHandler(e) {
        e.preventDefault();
        let productName = nameRef.current.value;
        let productDescription = descriptionRef.current.value;
        let productCategory = categoryRef.current.value;
        let productProtein =  proteinRef.current.value;
        let productFats = fatRef.current.value;
        let productCarbs = carbsRef.current.value;
        let productCalories = caloriesRef.current.value;

        onCreate({
            name:productName,
            description: productDescription,
            category: productCategory,
            protein: productProtein,
            fat : productFats,
            carbs: productCarbs,
            calories: productCalories
        });
        closeModal();
    }



   return (
        <div className={styles.productModalContainer}>
            <div className={styles.actionBtnContainer}>
                <button className={styles.addProductModalBtn} onClick={openModal}>
                    +
                </button>
            </div>

            <dialog ref={modalRef} className={styles.productModal}  >
                <div className={styles.productModalInfos} >

                    <h1>Δημιουργία Προιόντος</h1>
                    <Input type={"text"} label={'Τίτλος'} generalStyle={styles.productModalInfosInput}  ref={nameRef}   />
                    <Input type={"text"} label={'Περιγραφή'} generalStyle={styles.productModalInfosInput} ref={descriptionRef}  v />
                    <select ref={categoryRef}>
                        <option selected disabled>Επιλογή Κατηγορίας</option>
                        <option selected={product?.category === 'wrap'} value='wrap'>Αραβική</option>
                        <option selected={product?.category === 'sandwich'} value='sandwich'>Σαντουιτς</option>
                        <option selected={product?.category === 'toast'} value='toast'>Τοστ</option>
                        <option selected={product?.category === 'sweet'} value='sweet'>Γλυκό</option>
                    </select>
                    <div className={styles.nutrientsDataContainer}>
                        <Input type={'number'} label={'Πρωτείνή'}  ref={proteinRef}/>
                        <Input type={'number'} label={'Λιπαρά'}  ref={fatRef} />
                        <Input type={'number'} label={'Υδατανθρακες'}   ref={carbsRef} />
                        <Input type={'number'} label={'Συνολικές Θερμίδες'}   ref={caloriesRef} />
                    </div>
                    <div className={styles.actionBtnContainer}>
                        <button onClick={submitProductHandler}>Υποβολή</button>
                        <button onClick={closeModal} className={styles.closeBtn}>Κλείσιμο</button>
                    </div>

                </div>
            </dialog>
        </div>
    )
}