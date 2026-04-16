import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-md-4">
            <div className="footer-logo">NutriScan</div>
            <p className="footer-desc">
              Βοηθάμε επιχειρήσεις χειροποίητων προϊόντων να προσφέρουν πλήρη
              διατροφική διαφάνεια στους πελάτες τους με ένα απλό QR code.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-md-4 col-6">
            <div className="footer-col-title">Σύνδεσμοι</div>
            <ul className="footer-nav-list">
              <li><a href="#how-it-works">Πώς λειτουργεί</a></li>
              <li><a href="#features">Χαρακτηριστικά</a></li>
              <li><a href="#pricing">Τιμές</a></li>
              <li><a href="#contact">Επικοινωνία</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-6">
            <div className="footer-col-title">Επικοινωνία</div>
            <div className="footer-contact-row">
              <Mail size={15} />
              <a href="mailto:nickspanosf1@gmail.com" style={{ color: '#6b7280', textDecoration: 'none' }}>
                nickspanosf1@gmail.com
              </a>
            </div>
            <div className="footer-contact-row">
              <MapPin size={15} />
              <span>Χαλκίδα, Ελλάδα</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="footer-copy">
          © {year} NutriScan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
