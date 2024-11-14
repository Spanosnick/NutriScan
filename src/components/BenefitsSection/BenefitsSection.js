import React from 'react';
import './BenefitsSection.css';
import {Benefit} from "./Benefit";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons';



export function BenefitsSection() {
  return (
    <section className="benefits-section" id='benefits'>
      <h2 className="benefits_title">Πως Βοηθάει ?</h2>
      <div className="benefits_benefits">
          <Benefit icon={faPeopleGroup}  title='Διατροφική Διαφάνεια για τους Πελάτες σας' description='Με το NutriScan, οι πελάτες μπορούν να σκανάρουν το QR code και να δουν αμέσως τις διατροφικές πληροφορίες για κάθε προϊόν. Αυξήστε την εμπιστοσύνη τους προς την επιχείρησή σας με διαφάνεια και ακρίβεια' />
          <Benefit icon={faFaceSmile} title='Εύκολη Ενσωμάτωση χωρίς Τεχνικές Γνώσεις' description='Η εφαρμογή μας είναι φιλική προς τον χρήστη και δεν απαιτεί εξειδικευμένες τεχνικές γνώσεις. Απλώς καταχωρίστε τις διατροφικές αξίες των προϊόντων σας και δημιουργήστε QR codes με ένα κλικ.' />
          <Benefit icon={faHeart} title='Βελτίωση Brand Loyalty και Αφοσίωσης' description='Δείξτε ότι νοιάζεστε για την υγεία των πελατών σας παρέχοντας διατροφική πληροφόρηση. Αυτό ενισχύει την εικόνα της επιχείρησής σας ως μια υπεύθυνη και καινοτόμα μάρκα.' />
          <Benefit icon={faChartLine} title='Εργαλείο Ανάλυσης για Βελτιστοποίηση Προϊόντων' description='Η πλατφόρμα NutriScan προσφέρει αναφορές σχετικά με το ποιες πληροφορίες σκανάρουν περισσότερο οι πελάτες σας. Χρησιμοποιήστε αυτές τις πληροφορίες για να βελτιώσετε τα προϊόντα σας και να αυξήσετε τις πωλήσεις σας.' />
      </div>
    </section>
  );
}
