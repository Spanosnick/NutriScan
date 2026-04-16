import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, QrCode } from 'lucide-react';

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <motion.div
        className="phone-shell"
        initial={{ opacity: 0, y: 40, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
      >
        <div className="phone-screen">
          <div className="phone-topbar">NutriScan</div>
          <div className="phone-body">
            <p className="phone-product-label">Σάντουιτς Κοτόπουλο</p>
            <div className="phone-qr-box">
              <QrCode size={44} strokeWidth={1.5} />
            </div>
            <div className="phone-nutrients">
              <div className="nutrient-chip">
                <span className="val">480</span>
                <span className="lbl">Θερμίδες</span>
              </div>
              <div className="nutrient-chip">
                <span className="val">32g</span>
                <span className="lbl">Πρωτεΐνες</span>
              </div>
              <div className="nutrient-chip">
                <span className="val">48g</span>
                <span className="lbl">Υδατάνθρακες</span>
              </div>
              <div className="nutrient-chip">
                <span className="val">14g</span>
                <span className="lbl">Λίπη</span>
              </div>
            </div>
            <div className="phone-tag-row">
              <span className="phone-tag">Χωρίς γλουτένη</span>
              <span className="phone-tag">High Protein</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Text */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <span className="hero-badge">
                <span>🥗</span> Διατροφική διαφάνεια για επιχειρήσεις
              </span>
              <h1 className="hero-headline">
                <span className="green">Σκανάρεις.</span>{' '}
                Μαθαίνεις.{' '}
                <span className="green">Τρως πιο υγιεινά.</span>
              </h1>
              <p className="hero-sub">
                Δώσε στους πελάτες σου πλήρη εικόνα για κάθε σου προϊόν — θερμίδες,
                πρωτεΐνες, υδατάνθρακες, λίπη και αλλεργιογόνα — με ένα απλό scan QR code.
              </p>
              <div className="d-flex flex-wrap gap-3 hero-btns">
                <a href="#contact" className="btn-green">
                  Ξεκίνα δωρεάν <ArrowRight size={18} />
                </a>
                <a href="#how-it-works" className="btn-ghost-green">
                  Δες πώς λειτουργεί <ChevronDown size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Phone */}
          <div className="col-lg-6 d-none d-lg-block">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
