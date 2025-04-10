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

  const calculateEstimate = () => {
    const volume = values.length * values.width * values.height;
    const materialCost = volume * PRICES.materials[values.material];
    const laborHours = volume * 8;
    const laborCost = laborHours * PRICES.labor;
    const transportCost = PRICES.transport[values.location];
    const urgencyMultiplier = values.urgency === 1 ? 1 : 1.2;
    
    return Math.round((materialCost + laborCost + transportCost) * urgencyMultiplier);
  };

  return (
    <div className={Styles.calculator}>
      <h3>Llogaritësi i Çmimeve</h3>
      
      <div className={Styles.formGroup}>
        <label className={Styles.formLabel}>Lloji i Produktit:</label>
        <select 
          className={Styles.selectField}
          value={values.type}
          onChange={(e) => setValues({...values, type: e.target.value})}
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
          <input
            type="number"
            min="0.5"
            step="0.1"
            className={Styles.inputField}
            value={values.length}
            onChange={(e) => {
              const val = Number(e.target.value) || 0;
              setValues(prev => ({...prev, length: val}))
            }}
            placeholder="Gjatësia"
          />
          <span>x</span>
          <input
            type="number"
            min="0.5"
            step="0.1"
            className={Styles.inputField}
            value={values.width}
            onChange={(e) => {
              const val = Number(e.target.value) || 0;
              setValues(prev => ({...prev, width: val}))
            }}
            placeholder="Gjerësia"
          />
          <span>x</span>
          <input
            type="number"
            min="0.1"
            step="0.1"
            className={Styles.inputField}
            value={values.height}
            onChange={(e) => {
              const val = Number(e.target.value) || 0;
              setValues(prev => ({...prev, height: val}))
            }}
            placeholder="Trashësia"
          />
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
            >
              {key.toUpperCase()} ({price}€/m³)
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
          >
            Tirana
          </button>
          <button
            className={`${Styles.locationBtn} ${values.location === 'other' ? Styles.active : ''}`}
            onClick={() => setValues({...values, location: 'other'})}
            type="button"
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
        >
          <option value={1}>Standard (3-4 javë)</option>
          <option value={2}>E Shpejtë (+20%)</option>
        </select>
      </div>

      <div className={Styles.result}>
        <h4>Vlerësimi i Çmimit:</h4>
        <div className={Styles.price}>{calculateEstimate()}€</div>
        <small>*Çmimi përfshin materialin, punën dhe transportin</small>
      </div>

      <button className={Styles.ctaButton}>
        Kërko Ofertë të Detajuar
      </button>
    </div>
  )
}