import React from 'react'
import styles from './OurFeatures.module.css'
import customerLogo from '../../assets/user-headset.svg'
import restockLogo from '../../assets/restock.svg'
import paymentLogo from '../../assets/credit-card-buyer.svg'
import transformLogo from '../../assets/shipping-fast 1.svg'

export default function OurFeatures() {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.aboutCards}>
          <div className={styles.aboutCard}>
            <div className={styles.cardLogo}>
              <img src={transformLogo} alt="" />
            </div>
            <h3>Fast & Reliable Shipping</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus corrupti ratione officiis incidunt ipsum, provident eveniet recusandae vero a non sit illo? Mollitia, voluptates amet. Id repellendus quis ipsa?</p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.cardLogo}>
              <img src={paymentLogo} alt="" />
            </div>
              <h3>Secure Payment</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus corrupti ratione officiis incidunt ipsum, provident eveniet recusandae vero a non sit illo? Mollitia, voluptates amet. Id repellendus quis ipsa?</p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.cardLogo}>
            <img src={restockLogo} alt="" />
            </div>
            <h3>Easy Returns</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus corrupti ratione officiis incidunt ipsum, provident eveniet recusandae vero a non sit illo? Mollitia, voluptates amet. Id repellendus quis ipsa?</p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.cardLogo}>
            <img src={customerLogo} alt="" />
            </div>
            <h3>24/7 Customer Support</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus corrupti ratione officiis incidunt ipsum, provident eveniet recusandae vero a non sit illo? Mollitia, voluptates amet. Id repellendus quis ipsa?</p>
          </div>
        </div>
      </section>
  )
}
