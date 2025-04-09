import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDocumentById} from "../../../../firebase";
import {Input} from "../../../../common/components/Input/Input";
import Select from "../../../../common/components/Select/Select";
import {productCategories} from "../../../../common/utils/data";
import styles from "./EditProductPage.module.css";


export default function EditProductPage() {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function getProductDetails() {
            const productData = await getDocumentById('products', productId);
            console.log(productData);
            setProduct(productData);
        }
        getProductDetails();
    }, [productId])
    function handleProductChange(e) {
        const {name, value} = e.target;
        console.log(name);
        setProduct((prevState) => ({...prevState, [name]: value}));
    }
    function handleSelectChange(e) {
        const { value} = e.target;

        setProduct((prevState) => ({...prevState, 'category': value}));
    }

    return (
        <div className={styles.editContainer}>
            <h2>Επεξεργασία Προιόντος</h2>
            <Input type={"text"} value={product.name} inputName={'name'} label={'Ονομα'}  onChange={handleProductChange} />
            <Input type={"text"} value={product.description} inputName={'description'} label={'Περιγραφή'}  onChange={handleProductChange} />
            <Select onChange={handleSelectChange} selectedValue={product.category}  options={productCategories} label={'Eπιλογή κατηγορίας'}/>
            <Input type={"text"} value={product.protein} inputName={'protein'}  label={'Πρωτείνη'} onChange={handleProductChange} />
            <Input type={"text"} value={product.fat} inputName={'fat'}  label={'Λιπαρά'} onChange={handleProductChange} />
            <Input type={"text"} value={product.carbs} inputName={'carbs'} label={'Υδατάνθρακες'}  onChange={handleProductChange} />
            <Input type={"text"} value={product.calories} inputName={'calories'} label={'Θερμίδες'}  onChange={handleProductChange} />
            <button>Ενημέρωση Προίοντος</button>
        </div>
    );
}
