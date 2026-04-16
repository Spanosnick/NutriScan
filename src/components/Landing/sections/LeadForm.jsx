import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const BUSINESS_TYPES = [
  { value: '', label: 'Επίλεξε τύπο επιχείρησης' },
  { value: 'deli', label: 'Deli / Sandwich shop' },
  { value: 'cafeteria', label: 'Cafeteria / Coffee shop' },
  { value: 'salad_bar', label: 'Salad bar / Σπιτικά φαγητά' },
  { value: 'other', label: 'Άλλο' }
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  businessType: '',
  message: ''
};

export default function LeadForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await addDoc(collection(db, 'leads'), {
        ...form,
        createdAt: serverTimestamp()
      });
      setSuccess(true);
    } catch (err) {
      setError('Κάτι πήγε στραβά. Παρακαλώ δοκίμασε ξανά αργότερα.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="lead-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left copy */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Επικοινωνία</span>
              <h2 className="section-heading">
                Ενδιαφέρεσαι; Κράτησέ μας θέση.
              </h2>
              <p className="section-sub">
                Συμπλήρωσε τη φόρμα και θα επικοινωνήσουμε μαζί σου για να σου κάνουμε
                δωρεάν demo του NutriScan.
              </p>
              <div className="mt-4 d-flex flex-column gap-2">
                {['Χωρίς δεσμεύσεις', 'Δωρεάν demo', 'Γρήγορη εγκατάσταση'].map((item, i) => (
                  <div key={i} className="d-flex align-items-center gap-2" style={{ color: '#86efac', fontSize: '0.95rem' }}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="form-card">
                {success ? (
                  <div className="success-box">
                    <div className="success-icon-wrap">
                      <CheckCircle size={30} />
                    </div>
                    <h3>Το αίτημά σου στάλθηκε! 🎉</h3>
                    <p>
                      Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σου σύντομα για να κλείσουμε
                      το demo σου.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-field">
                          <label htmlFor="name">Όνομα *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-input"
                            placeholder="Νίκος Παπαδόπουλος"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-field">
                          <label htmlFor="email">Email *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-input"
                            placeholder="nikos@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-field">
                          <label htmlFor="phone">Τηλέφωνο</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="form-input"
                            placeholder="69XXXXXXXX"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-field">
                          <label htmlFor="businessName">Όνομα επιχείρησης *</label>
                          <input
                            id="businessName"
                            name="businessName"
                            type="text"
                            className="form-input"
                            placeholder="Το κατάστημά μου"
                            value={form.businessName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field">
                          <label htmlFor="businessType">Τύπος επιχείρησης *</label>
                          <select
                            id="businessType"
                            name="businessType"
                            className="form-input"
                            value={form.businessType}
                            onChange={handleChange}
                            required
                          >
                            {BUSINESS_TYPES.map(opt => (
                              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-field">
                          <label htmlFor="message">Μήνυμα</label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-input"
                            rows={3}
                            placeholder="Πες μας λίγα λόγια για το κατάστημά σου..."
                            value={form.message}
                            onChange={handleChange}
                            style={{ resize: 'vertical' }}
                          />
                        </div>
                      </div>
                    </div>

                    {error && <div className="form-error">{error}</div>}

                    <button type="submit" className="form-submit-btn" disabled={loading}>
                      {loading ? 'Αποστολή...' : 'Στείλε αίτημα'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
