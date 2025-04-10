'use client';
import { useState } from 'react';
import Styles from './RequestForm.module.css';

export default function RequestForm({ onClose }) {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles(uploaded);
  };

  return (
    <div className={Styles.formOverlay}>
      <div className={Styles.formContainer}>
        <h2 className={Styles.formTitle}>Kërko një Projekt Personalizuar</h2>
        
        <form className={Styles.form}>
          <div className={Styles.formGroup}>
            <label className={Styles.label}>Lloji i Projektit:</label>
            <select className={Styles.select} required>
              <option value="">Zgjidhni kategorinë</option>
              <option value="sallona">Sallona</option>
              <option value="kuzhina">Kuzhina</option>
              <option value="dhome">Dhome gjumi</option>
              <option value="zyra">Zyre</option>
              <option value="dyer">Dyer Dritare</option>
            </select>
          </div>

          <div className={Styles.formGroup}>
            <label className={Styles.label}>Ngarko Vizatimet:</label>
            <div className={Styles.uploadContainer}>
              <input 
                type="file" 
                multiple
                onChange={handleFileUpload}
                className={Styles.fileInput}
                id="fileUpload"
              />
              <label htmlFor="fileUpload" className={Styles.uploadLabel}>
                <span className={Styles.uploadIcon}>📎</span>
                <span>{files.length > 0 ? `${files.length} skedarë të zgjedhur` : 'Zgjidh skedarët'}</span>
              </label>
            </div>
          </div>

          <div className={Styles.formRow}>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Gjatësia (cm):</label>
              <input type="number" className={Styles.input} required />
            </div>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Gjerësia (cm):</label>
              <input type="number" className={Styles.input} required />
            </div>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Lartësia (cm):</label>
              <input type="number" className={Styles.input} required />
            </div>
          </div>

          <div className={Styles.formGroup}>
            <label className={Styles.label}>Shënime shtesë:</label>
            <textarea 
              className={Styles.textarea}
              placeholder="Përshkruani vizionin tuaj..."
              rows="4"
            />
          </div>

          <div className={Styles.buttonGroup}>
            <button 
              type="button" 
              className={Styles.cancelButton}
              onClick={onClose}
            >
              Anulo
            </button>
            <button type="submit" className={Styles.submitButton}>
              Dërgo Kërkesën
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}