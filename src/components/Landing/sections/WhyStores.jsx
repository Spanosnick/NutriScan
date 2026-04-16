import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Trophy, MessageCircleOff, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Heart size={22} />,
    title: 'Προσέλκυσε health-conscious πελάτες',
    desc: 'Όλο και περισσότεροι καταναλωτές ελέγχουν τι τρώνε. Δείξε τους ότι το κατάστημά σου τους νοιάζεται.',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Διαφοροποιήσου από τον ανταγωνισμό',
    desc: 'Ξεχώρισε ως η επιχείρηση που προσφέρει πλήρη διατροφική διαφάνεια — κάτι που ελάχιστοι ανταγωνιστές σου κάνουν.',
  },
  {
    icon: <MessageCircleOff size={22} />,
    title: 'Μείωσε ερωτήσεις πελατών',
    desc: 'Τέλος στο «τι έχει μέσα;» και «είναι χωρίς γλουτένη;». Η πληροφορία είναι διαθέσιμη άμεσα, χωρίς αναμονή.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Χτίσε εμπιστοσύνη',
    desc: 'Οι πελάτες εμπιστεύονται τα καταστήματα που είναι ανοιχτά για τα συστατικά τους. Η διαφάνεια φέρνει επιστροφές.',
  },
];

export default function WhyStores() {
  return (
    <section className="why-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Γιατί NutriScan</span>
          <h2 className="section-heading">
            Γιατί η επιχείρησή σου χρειάζεται NutriScan
          </h2>
          <p className="section-sub">
            Ο σύγχρονος καταναλωτής θέλει να ξέρει τι τρώει. Δώσε του αυτή την εμπιστοσύνη
            πριν το κάνουν οι ανταγωνιστές σου.
          </p>
        </motion.div>

        <div className="row g-4">
          {benefits.map((b, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="h-100"
              >
                <div className="benefit-card">
                  <div className="benefit-icon-wrap">{b.icon}</div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
