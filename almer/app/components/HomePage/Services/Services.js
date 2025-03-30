import React from 'react'
import Styles from './Services.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <main className={Styles.services}>
        <div className={Styles.servicesContainer}>
            <div className={Styles.servicesHeader}>
                <h1>Sherbimet Tona</h1>
            </div>
            <div className={Styles.servicesContent}>
                <div className={Styles.servicesCard}>
                    <Image src="/sofa.png" alt="Service 1" width={100} height={100} className={Styles.servicesImage}/>
                    <h2>Sallon</h2>
                </div>
                <div className={Styles.servicesCard}>
                    <Image src="/sink.png" alt="Service 2" width={100} height={100} className={Styles.servicesImage}/>
                    <h2>Kuzhine</h2>
                </div>
                <div className={Styles.servicesCard}>
                    <Image src="/bed.png" alt="Service 3" width={100} height={100} className={Styles.servicesImage}/>
                    <h2>Dhoma Gjumi</h2>
                </div>
                <div className={Styles.servicesCard}>
                    <Image src="/door.png" alt="Service 4" width={100} height={100} className={Styles.servicesImage}/>
                    <h2>Dyer Dritare</h2>
                </div>
            </div>
            <div className={Styles.servicesContentHover}>
                <div className={Styles.servicesCardHover}>
                    <Image src="/livingServices.jpg" alt="Service 1" width={300} height={200} className={Styles.servicesImage}/>
                    <h2>Sallon</h2>
                    <p>Mobilje funksionale dhe elegante për çdo hapësirë.</p>
                    <p>Dizajne moderne dhe klasike të personalizuara për ju.</p>
                    <Link href={"/services"} className={Styles.servicesButton}>Shiko me shume</Link>
                </div>
                <div className={Styles.servicesCardHover}>
                    <Image src="/kitchenServices.jpg" alt="Service 2" width={300} height={200} className={Styles.servicesImage}/>
                    <h2>Kuzhine</h2>
                    <p>Kuzhina të ndërtuara me material cilësor dhe dizajn unik.</p>
                    <p>Optimizim i hapësirës për komoditet maksimal.</p>
                    <Link href={"/services"} className={Styles.servicesButton}>Shiko me shume</Link>
                </div>
                <div className={Styles.servicesCardHover}>
                    <Image src="/bedServices.jpg" alt="Service 3" width={300} height={200} className={Styles.servicesImage}/>
                    <h2>Dhoma Gjumi</h2>
                    <p>Krijoni një ambient relaksues dhe të ngrohtë për gjumin tuaj.</p>
                    <p>Mobilje të personalizuara për rehati dhe stil.</p>
                    <Link href={"/services"} className={Styles.servicesButton}>Shiko me shume</Link>
                </div>
                <div className={Styles.servicesCardHover}>
                    <Image src="/doorServices.jpg" alt="Service 4" width={300} height={200} className={Styles.servicesImage}/>
                    <h2>Dyer Dritare</h2>
                    <p>Dyer druri dhe alumini me cilësi të lartë.</p>
                    <p>Dizajn modern me siguri dhe izolim maksimal.</p>
                    <Link href={"/services"} className={Styles.servicesButton}>Shiko me shume</Link>
                </div>
            </div>
        </div>
    </main>

  )
}
