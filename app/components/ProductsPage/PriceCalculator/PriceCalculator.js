'use client';
import { useState } from 'react';
import Styles from './PriceCalculator.module.css';

const PRICES = {
  materials: {
    melamin: 160,
    mdf: 225,
    mdf_lyerje: 295
  },
  labor: 20,
  transport: {
    tirana: 50,
    other: 100
  }
};

export default function PriceCalculator() {
  const [values, setValues] = useState({
    length: '',
    width: '',
    height: '',
    material: 'melamin',
    urgency: 1,
    location: 'tirana'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateInputs = () => {
    return values.length && values.width && values.height;
  };

  const calculateEstimate = () => {
    if (!validateInputs()) return 0;
    
    const length = parseFloat(values.length) || 0.1;
    const width = parseFloat(values.width) || 0.1;
    const height = parseFloat(values.height) || 0.1;

    const volume = length * width * height;
    const materialCost = volume * PRICES.materials[values.material];
    const laborCost = volume * 8 * PRICES.labor;
    const transportCost = PRICES.transport[values.location];
    const urgencyMultiplier = values.urgency === 1 ? 1 : 1.2;

    return Math.round((materialCost + laborCost + transportCost) * urgencyMultiplier);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (!validateInputs()) {
      alert('Ju lutem plotësoni të gjitha dimensionet!');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', values);
  };

  return (
    <div className={Styles.calculator}>
      <h3>Llogaritësi i Çmimeve për Kuzhina</h3>

      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className={Styles.dimensionGroup}>
          <div className={Styles.dimensionInput}>
            <label className={Styles.dimensionLabel}>
              Gjatësia (m):
              <input
                type="number"
                step="0.1"
                className={`${Styles.inputField} ${submitted && !values.length ? Styles.error : ''}`}
                value={values.length}
                onChange={(e) => handleInputChange('length', e.target.value)}
                placeholder="6.0"
                min="0"
              />
            </label>
          </div>

          <div className={Styles.dimensionInput}>
            <label className={Styles.dimensionLabel}>
              Gjerësia (m):
              <input
                type="number"
                step="0.1"
                className={`${Styles.inputField} ${submitted && !values.width ? Styles.error : ''}`}
                value={values.width}
                onChange={(e) => handleInputChange('width', e.target.value)}
                placeholder="0.6"
                min="0"
              />
            </label>
          </div>

          <div className={Styles.dimensionInput}>
            <label className={Styles.dimensionLabel}>
              Lartësia (m):
              <input
                type="number"
                step="0.1"
                className={`${Styles.inputField} ${submitted && !values.height ? Styles.error : ''}`}
                value={values.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                placeholder="2.6"
                min="0"
              />
            </label>
          </div>
        </div>

        <div className={Styles.formGroup}>
          <label className={Styles.formLabel}>Materiali:</label>
          <div className={Styles.materialOptions}>
            {Object.entries(PRICES.materials).map(([key, price]) => (
              <button
                key={key}
                type="button"
                className={`${Styles.materialBtn} ${values.material === key ? Styles.active : ''}`}
                onClick={() => setValues({...values, material: key})}
                aria-label={`Zgjidh materialin ${key.replace('_', ' me ')}`}
              >
                <span className={Styles.materialName}>
                  {key.replace('_', ' me ').toUpperCase()}
                </span>
                <span className={Styles.materialPrice}>{price}€/m³</span>
              </button>
            ))}
          </div>
        </div>

        <div className={Styles.formGroup}>
          <label className={Styles.formLabel}>Vendndodhja:</label>
          <div className={Styles.locationBtns}>
            <button
              type="button"
              className={`${Styles.locationBtn} ${values.location === 'tirana' ? Styles.active : ''}`}
              onClick={() => setValues({...values, location: 'tirana'})}
            >
              Tirana
            </button>
            <button
              type="button"
              className={`${Styles.locationBtn} ${values.location === 'other' ? Styles.active : ''}`}
              onClick={() => setValues({...values, location: 'other'})}
            >
              Jashtë Tiranës
            </button>
          </div>
        </div>

        <div className={Styles.formGroup}>
          <label className={Styles.formLabel}>Urgjenca:</label>
          <select
            className={Styles.selectField}
            value={values.urgency}
            onChange={(e) => setValues({...values, urgency: Number(e.target.value)})}
          >
            <option value={1}>Standard (3-4 javë)</option>
            <option value={1.2}>E Shpejtë (+20%)</option>
          </select>
        </div>

        <div className={Styles.result}>
          <h4>Vlerësimi i Çmimit:</h4>
          <div className={Styles.price}>
            {calculateEstimate().toLocaleString('sq-AL')}€
          </div>
          <div className={Styles.disclaimer}>
            <span role="img" aria-hidden="true">ℹ️</span>
            Çmimet përfshijnë materialin, punën dhe transportin
          </div>
        </div>

        <button
          type="submit"
          className={Styles.ctaButton}
          aria-label="Kërko ofertë të detajuar"
        >
          Kërko Ofertë të Detajuar
        </button>
      </form>
    </div>
  )
}