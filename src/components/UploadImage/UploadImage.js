import { useState } from "react";
import styles from './UploadImage.module.css'
import logo from "../../images/logo.jpg";
import {Loading} from "../Loading/Loading";
import {setDocumentById, updateDocumentById} from "../../firebase";

const UploadImage = ({documentId,defaultImage = null}) => {
    console.log(documentId);
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const imageSrc = defaultImage != null ? `https://nickport.com/apis/nutriscanner_photos/${documentId}/${defaultImage}` :
        `https://nickport.com/apis/nutriscanner_photos/${documentId}/${defaultImage}`;


    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {

        if (!image ) {
            alert("Please select an image.");
            return;
        }
        setImageLoading(true);
        const formData = new FormData();
        formData.append("image", image);
        formData.append("storeId", documentId);

        try {
            const response = await fetch("https://nickport.com/apis/uploadImage.php", {
                'method': "POST",
                'body': formData,
                'Access-Control-Allow-Origin': '*'
            });

            const data = await response.json();
            alert(data.message || "Upload successful!");
            // I want to set the image url to the firestore document
            // and then refresh the page
            await updateDocumentById("stores", documentId, {image: image.name});
            window.location.reload();
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Error uploading image.");
        }
        setImageLoading(false);
    };

    if(imageLoading){
        return <Loading />
    }

    return (
        <div  className={styles.uploadImageContainer}>
            <img src={imageSrc} alt="Upload Preview" />
            <input type="file" hidden={true} accept="image/*"  id='uploadImage' onChange={handleFileChange} />
            <label htmlFor='uploadImage'>Αλλαγή Είκονας {image?.name }</label>
            {image !=null && <button onClick={handleUpload}>Ανέβασμα Είκονας</button>}

        </div>
    );
};

export default UploadImage;
