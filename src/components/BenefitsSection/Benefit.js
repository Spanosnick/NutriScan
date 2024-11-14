import React from 'react';
import './BenefitsSection.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from '@fortawesome/free-solid-svg-icons';


export function Benefit({
                            icon = faQuestion,
                            title = "Διατροφική Διαφάνεια για τους Πελάτες σας",
                            description = "Με το NutriScan, οι πελάτες μπορούν να σκανάρουν το QR code και να δουν αμέσως τις διατροφικές πληροφορίες για κάθε προϊόν. Αυξήστε την εμπιστοσύνη τους προς την επιχείρησή σας με διαφάνεια και ακρίβεια"
                        }) {
    return (
        <div className='benefit_card'>
            <div  className='benefit_icon' >
            <FontAwesomeIcon   icon={icon}/> {/* House icon */}
            </div>

            <h3 className="benefit_title">{title}</h3>
            <p className="benefit_description">{description}</p>

        </div>
    );
}
