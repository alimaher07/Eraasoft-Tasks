import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <main className={styles.heroSection}>
      <div className={styles.title}>
      <h2>About BookShop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officia quia! Natus debitis quos perferendis </p>
      </div>
    </main>
    <section>
      <h2>Our Mission</h2>
      <div className={styles.missionCards}>
        <div className={styles.missionCart}>
          <div className={styles.cartHeader}>
            <h3> Quality Selection </h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro veritatis ab soluta cum quis placeat? Aliquam nemo omnis neque placeat rem eaque nesciunt voluptatibus? Laborum repudiandae enim necessitatibus sapiente.</p>
          <a href="">view more</a>
        </div>
        <div className={styles.missionCart}>
          <div className={styles.cartHeader}>
            <h3>Set Up Stories</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro veritatis ab soluta cum quis placeat? Aliquam nemo omnis neque placeat rem eaque nesciunt voluptatibus? Laborum repudiandae enim necessitatibus sapiente.</p>
          <a href="">view more</a>
        </div>
        <div className={styles.missionCart}>
          <div className={styles.cartHeader}>
            <h3> Exceptional service </h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi porro veritatis ab soluta cum quis placeat? Aliquam nemo omnis neque placeat rem eaque nesciunt voluptatibus? Laborum repudiandae enim necessitatibus sapiente.</p>
          <a href="">view more</a>
        </div>
      </div>
    </section>
    </>
  )
}
