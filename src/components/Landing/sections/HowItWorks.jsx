import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, QrCode, Smartphone } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: <UploadCloud size={26} />,
    title: 'Πρόσθεσε τα προϊόντα σου',
    desc: 'Μπες στο dashboard και πρόσθεσε τα προϊόντα σου με τις διατροφικές αξίες, αλλεργιογόνα και ετικέτες (vegan, gluten-free κ.ά.).',
  },
  {
    number: '2',
    icon: <QrCode size={26} />,
    title: 'Εκτύπωσε το QR code σου',
    desc: 'Κάθε κατάστημα αποκτά το δικό του μοναδικό QR code. Τοποθέτησέ το στον πάγκο, στο μενού ή στη βιτρίνα σου.',
  },
  {
    number: '3',
    icon: <Smartphone size={26} />,
    title: 'Οι πελάτες σκανάρουν & βλέπουν',
    desc: 'Οι πελάτες σκανάρουν και βλέπουν ακαριαία τις πλήρεις διατροφικές πληροφορίες κάθε προϊόντος στο κινητό τους.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Πώς λειτουργεί</span>
          <h2 className="section-heading">Απλό σαν 1-2-3</h2>
          <p className="section-sub">
            Σε λίγα λεπτά μπορείς να έχεις το κατάστημά σου έτοιμο να προσφέρει πλήρη
            διατροφική διαφάνεια στους πελάτες σου.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {steps.map((step, i) => (
            <div className="col-md-4" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="h-100"
              >
                <div className="step-card">
                  <div className="step-number-badge">{step.number}</div>
                  <div className="step-icon-wrap">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
