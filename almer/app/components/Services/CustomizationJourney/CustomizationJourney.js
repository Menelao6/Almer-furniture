'use client';
import { useState, useEffect } from 'react';
import Styles from './CustomizationJourney.module.css';

const steps = [
  { title: 'Vision Sharing', key: 'vision' },
  { title: 'Design Collaboration', key: 'design' },
  { title: 'Material Selection', key: 'material' },
  { title: 'Artisan Crafting', key: 'crafting' },
  { title: 'Delivery & Installation', key: 'delivery' }
];

export default function CustomizationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={Styles.section} style={{ backgroundColor: '#F5EFE6' }}>
      <div className={Styles.header}>
        <h2 className={Styles.title}>Procesi i Përshtatjes</h2>
        <p className={Styles.subtitle}>5 hapa të thjeshtë për të realizuar vizionin tuaj</p>
      </div>

      {isMobile ? (
        <div className={Styles.mobileSteps}>
          {steps.map((step, index) => (
            <div key={step.key} className={Styles.mobileStepContainer}>
              <div 
                className={`${Styles.mobileStep} ${index === activeStep ? Styles.active : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={Styles.stepNumber}>0{index + 1}</div>
                <h3 className={Styles.stepTitle}>{step.title}</h3>
              </div>
              {index === activeStep && (
                <div className={Styles.mobileImages}>
                  <img 
                    src={`/process/${step.key}-sketch.jpg`} 
                    alt="Client sketch" 
                    className={Styles.mobileImage}
                  />
                  <img 
                    src={`/process/${step.key}-progress.jpg`} 
                    alt="Workshop progress" 
                    className={Styles.mobileImage}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={Styles.stepsContainer}>
            {steps.map((step, index) => (
              <div 
                key={step.key}
                className={`${Styles.step} ${index === activeStep ? Styles.active : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={Styles.stepNumber}>0{index + 1}</div>
                <h3 className={Styles.stepTitle}>{step.title}</h3>
              </div>
            ))}
          </div>

          <div className={Styles.visualization}>
            <div className={Styles.imageComparison}>
              <img 
                src={`/process/${steps[activeStep].key}-sketch.jpg`} 
                alt="Client sketch" 
                className={Styles.sketchImage}
              />
              <img 
                src={`/process/${steps[activeStep].key}-progress.jpg`} 
                alt="Workshop progress" 
                className={Styles.progressImage}
              />
            </div>
          </div>
        </>
      )}
    </section>
  )
}