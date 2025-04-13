'use client';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactPage.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xrbpjdvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          inquiry_type: formData.inquiryType
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '', 
          inquiryType: 'general' 
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Na Kontaktoni</h2>

        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Emri i Plotë
                </label>
                <input
                  type="text"
                  required
                  className={styles.formInput}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Email Adresa
                  </label>
                  <input
                    type="email"
                    required
                    className={styles.formInput}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Numri i Telefonit
                  </label>
                  <input
                    type="tel"
                    required
                    className={styles.formInput}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Lloji i Pyetjes
                </label>
                <select
                  className={styles.formSelect}
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                >
                  <option value="general">Pyetje e Përgjithshme</option>
                  <option value="order">Informacion për Porosi</option>
                  <option value="custom">Kërkesë të Personalizuar</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Mesazhi
                </label>
                <textarea
                  rows={5}
                  required
                  className={styles.formTextarea}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Dërgohet...' : 'Dërgo Mesazhin'}
              </button>

              {submitted && (
                <div className={styles.successMessage}>
                  Mesazhi u dërgua me sukses! Do t&apos; ju kontaktojmë shpejt.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Social Media */}
          <div className={styles.infoWrapper}>
            <div className={styles.infoContent}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Kontakt Direkt</h3>
                <div className={styles.contactInfo}>
                  <p className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    +355 123 456 789
                  </p>
                  <p className={styles.contactItem}>
                    <span className={styles.contactIcon}>📧</span>
                    info@Almer.com
                  </p>
                  <p className={styles.contactItem}>
                    <span className={styles.contactIcon}>📍</span>
                    Rruga e ..., Tirana, Albania
                  </p>
                </div>
              </div>

              <div className={styles.socialBlock}>
                <h3 className={styles.infoTitle}>Na Ndiqni në Social Media</h3>
                <div className={styles.socialIcons}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://wa.me/355123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              <div className={styles.hoursBlock}>
                <h3 className={styles.infoTitle}>Orari i Punës</h3>
                <div className={styles.workingHours}>
                  <p>E Hënë - E Premte: 08:00 - 18:00</p>
                  <p>E Shtunë: 09:00 - 14:00</p>
                  <p>E Dielë: Mbyllur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}