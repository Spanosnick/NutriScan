import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: '/μήνα',
    features: [
      'Έως 10 προϊόντα',
      '1 κατάστημα',
      'Βασικές διατροφικές πληροφορίες',
      'QR code καταστήματος',
      'Mobile-friendly εμφάνιση'
    ],
    cta: 'Ξεκίνα δωρεάν',
    popular: false
  },
  {
    name: 'Pro',
    price: '19',
    period: '/μήνα',
    features: [
      'Απεριόριστα προϊόντα',
      '1 κατάστημα',
      'Αλλεργιογόνα & ετικέτες',
      'Analytics σκαναρισμάτων',
      'Προτεραιότητα υποστήριξης'
    ],
    cta: 'Ξεκίνα με Pro',
    popular: true
  },
  {
    name: 'Business',
    price: '49',
    period: '/μήνα',
    features: [
      'Απεριόριστα προϊόντα',
      'Πολλαπλά καταστήματα',
      'Premium analytics',
      'Custom branding',
      'Dedicated support'
    ],
    cta: 'Επικοινώνησε μαζί μας',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Τιμές</span>
          <h2 className="section-heading">Διάλεξε το πλάνο σου</h2>
          <p className="section-sub">
            Ξεκίνα δωρεάν και αναβάθμισε όταν θες. Χωρίς δεσμεύσεις.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div className="col-md-4" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="h-100"
              >
                <div className={`pricing-card${plan.popular ? ' popular' : ''}`}>
                  {plan.popular && <span className="popular-badge">⭐ Πιο δημοφιλές</span>}

                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-price">
                    <sup>€</sup>{plan.price}
                  </div>
                  <div className="plan-period">{plan.period}</div>

                  <ul className="plan-features">
                    {plan.features.map((f, j) => (
                      <li key={j}>
                        <Check size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={plan.popular ? 'btn-green w-100 justify-content-center' : 'btn-ghost-green w-100 justify-content-center'}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          * Οι τιμές είναι ενδεικτικές και θα οριστικοποιηθούν σύντομα.
        </p>
      </div>
    </section>
  );
}
