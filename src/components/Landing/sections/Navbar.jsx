import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`landing-nav${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#top" className="nav-logo">NutriScan</a>

        {/* Desktop links */}
        <div className="nav-links d-none d-md-flex align-items-center">
          <a href="#how-it-works">Πώς λειτουργεί</a>
          <a href="#features">Χαρακτηριστικά</a>
          <a href="#pricing">Τιμές</a>
          <a href="#contact">Επικοινωνία</a>
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-btn nav-btn-desktop d-none d-md-inline-block">
          Δοκίμασέ το δωρεάν
        </a>

        {/* Hamburger */}
        <button
          className="hamburger-btn d-md-none"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Άνοιγμα μενού"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
        <a href="#how-it-works" onClick={handleNavClick}>Πώς λειτουργεί</a>
        <a href="#features" onClick={handleNavClick}>Χαρακτηριστικά</a>
        <a href="#pricing" onClick={handleNavClick}>Τιμές</a>
        <a href="#contact" onClick={handleNavClick}>Επικοινωνία</a>
        <a href="#contact" className="nav-btn mt-2" onClick={handleNavClick} style={{ textAlign: 'center' }}>
          Δοκίμασέ το δωρεάν
        </a>
      </div>
    </motion.nav>
  );
}