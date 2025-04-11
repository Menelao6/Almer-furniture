'use client';
import { useState } from 'react';
import Styles from './PriceCalculator.module.css';

const PRICES = {
  materials: {
    pine: 150,
    oak: 300,
    walnut: 450
  },
  labor: 20,
  transport: {
    tirana: 50,
    other: 100
  }
};

export default function PriceCalculator() {
  const [values, setValues] = useState({
    type: 'kuzhine',
    length: 2,
    width: 1,
    height: 0.5,
    material: 'pine',
    urgency: 1,
    location: 'tirana'
  });

  const validateInput = (value, min = 0.1, max = 10) => {
    const numValue = Number(value) || min;
    return Math.min(Math.max(numValue, min), max);
  };

  const calculateEstimate = () => {
    const safeLength = validateInput(values.length);
    const safeWidth = validateInput(values.width);
    const safeHeight = validateInput(values.height);
    
    const volume = safeLength * safeWidth * safeHeight;
    const materialCost = volume * PRICES.materials[values.material];
    const laborHours = volume * 8;
    const laborCost = laborHours * PRICES.labor;
    const transportCost = PRICES.transport[values.location];
    const urgencyMultiplier = values.urgency === 1 ? 1 : 1.2;

    return Math.round((materialCost + laborCost + transportCost) * urgencyMultiplier);
  };

  const formatNumber = (num) => 
    num.toLocaleString('sq-AL', { 
      minimumFractionDigits: 1,
      maximumFractionDigits: 1 
    });

  return (
    <div className={Styles.calculator}>
      <h3>Llogaritësi i Çmimeve</h3>

      <div className={Styles.formGroup}>
        <label className={Styles.formLabel} htmlFor="productType">
          Lloji i Produktit:
        </label>
        <select
          id="productType"
          className={Styles.selectField}
          value={values.type}
          onChange={(e) => setValues({...values, type: e.target.value})}
          aria-label="Zgjidhni llojin e produktit"
        >
          <option value="kuzhine">Kuzhine</option>
          <option value="sallon">Sallon</option>
          <option value="dhome_gjumi">Dhoma Gjumi</option>
          <option value="dere">Dyer/Dritare</option>
        </select>
      </div>

      <div className={Styles.formGroup}>
        <label className={Styles.formLabel}>Dimensionet (metra):</label>
        <div className={Styles.dimensions}>
          {['length', 'width', 'height'].map((field) => (
            <input
              key={field}
              type="number"
              min="0.1"
              max="10"
              step="0.1"
              className={Styles.inputField}
              value={values[field]}
              onChange={(e) => setValues({
                ...values,
                [field]: validateInput(e.target.value)
              })}
              placeholder={
                field === 'length' ? 'Gjatësia' :
                field === 'width' ? 'Gjerësia' : 'Trashësia'
              }
              aria-label={`${field.replace(/^\w/, c => c.toUpperCase())} në metra`}
            />
          ))}
        </div>
      </div>

      <div className={Styles.formGroup}>
        <label className={Styles.formLabel}>Materiali:</label>
        <div className={Styles.materialOptions}>
          {Object.entries(PRICES.materials).map(([key, price]) => (
            <button
              key={key}
              className={`${Styles.materialBtn} ${values.material === key ? Styles.active : ''}`}
              onClick={() => setValues({...values, material: key})}
              type="button"
              aria-label={`Zgjidh materialin ${key}`}
            >
              {key.toUpperCase()} ({price}€/m³)
              <span className={Styles.materialOrigin}>({key === 'pine' ? 'Më i popullarizuar' : ''})</span>
            </button>
          ))}
        </div>
      </div>

      <div className={Styles.formGroup}>
        <label className={Styles.formLabel}>Vendndodhja:</label>
        <div className={Styles.locationBtns}>
          <button
            className={`${Styles.locationBtn} ${values.location === 'tirana' ? Styles.active : ''}`}
            onClick={() => setValues({...values, location: 'tirana'})}
            type="button"
            aria-label={values.location === 'tirana' ? "Tirana e zgjedhur" : "Zgjidh Tirana"}
          >
            Tirana
          </button>
          <button
            className={`${Styles.locationBtn} ${values.location === 'other' ? Styles.active : ''}`}
            onClick={() => setValues({...values, location: 'other'})}
            type="button"
            aria-label={values.location === 'other' ? "Zgjedhur lokacion jashtë Tiranës" : "Zgjidh lokacion jashtë Tiranës"}
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
          onChange={(e) => setValues({...values, urgency: parseInt(e.target.value)})}
          aria-label="Zgjidhni urgjencën"
        >
          <option value={1}>Standard (3-4 javë)</option>
          <option value={2}>E Shpejtë (+20%)</option>
        </select>
      </div>

      <div className={Styles.result}>
        <h4>Vlerësimi i Çmimit:</h4>
        <div className={Styles.price}>
          {formatNumber(calculateEstimate())}€
        </div>
        <div className={Styles.disclaimer}>
          <span role="img" aria-hidden="true">ℹ️</span>
          {`Vlerësimi mesatar - Çmimet e ${new Date().toLocaleDateString('sq-AL', {
            month: 'long',
            year: 'numeric'
          })}`}
        </div>
        <small>*Çmimi përfshin materialin, punën dhe transportin</small>
      </div>

      <button 
        className={Styles.ctaButton}
        aria-label="Kërko ofertë të detajuar"
      >
        Kërko Ofertë të Detajuar
      </button>
    </div>
  )
}