import React from 'react';
import { motion } from 'framer-motion';
import { Flame, AlertTriangle, LayoutDashboard, QrCode, Smartphone, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Flame size={20} />,
    title: 'Διατροφικές αξίες',
    desc: 'Θερμίδες, πρωτεΐνες, υδατάνθρακες και λίπη για κάθε προϊόν.',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Αλλεργιογόνα & ετικέτες',
    desc: 'Vegan, χωρίς γλουτένη, lactose-free και άλλες διατροφικές ετικέτες.',
  },
  {
    icon: <LayoutDashboard size={20} />,
    title: 'Εύκολη διαχείριση',
    desc: 'Πρόσθεσε, επεξεργάσου ή διάγραψε προϊόντα εύκολα από το dashboard.',
  },
  {
    icon: <QrCode size={20} />,
    title: 'Μοναδικό QR ανά κατάστημα',
    desc: 'Κάθε κατάστημά σου αποκτά το δικό του QR code για άμεση πρόσβαση.',
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile-friendly για πελάτες',
    desc: 'Το menu των προϊόντων είναι βελτιστοποιημένο για κινητό, χωρίς app.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Analytics (σύντομα)',
    desc: 'Δες ποια προϊόντα σκανάρουν περισσότερο οι πελάτες σου.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Χαρακτηριστικά</span>
          <h2 className="section-heading">Τι προσφέρει το NutriScan</h2>
          <p className="section-sub">
            Όλα όσα χρειάζεσαι για να προσφέρεις πλήρη διατροφική διαφάνεια στους πελάτες σου.
          </p>
        </motion.div>

        <div className="row g-2">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="feature-row">
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <div>
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
