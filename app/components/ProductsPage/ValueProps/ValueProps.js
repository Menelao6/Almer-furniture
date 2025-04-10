import Styles from './ValueProps.module.css';

export default function ValueProps() {
  return (
    <section className={Styles.valueProps}>
      <div className={Styles.propCard}>
        <div className={Styles.propIcon}>📐</div>
        <h3>Konsultim Falas</h3>
        <p>Vizitë në vend për matje dhe konsultim</p>
      </div>
      
      <div className={Styles.propCard}>
        <div className={Styles.propIcon}>🌳</div>
        <h3>Drurë Lokal</h3>
        <p>Përdorim drurë shqiptar (Lis, Ah, Bredh)</p>
      </div>
      
      <div className={Styles.propCard}>
        <div className={Styles.propIcon}>🛡️</div>
        <h3>1 Vit Garanci</h3>
        <p>Siguri për investimin tuaj</p>
      </div>
    </section>
  )
}