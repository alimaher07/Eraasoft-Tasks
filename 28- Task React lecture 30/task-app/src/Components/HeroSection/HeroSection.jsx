import React from 'react'
import styles from './HeroSection.module.css'
import micLogo from '../../assets/mic.svg'
import searchLogo from '../../assets/search.svg'

export default function HeroSection() {
  return (
    <main className={styles.heroSection}>
      <div className={styles.input}>
        <div className={styles.searchInput}>
          <input type="text" placeholder='Search'/>
          <a className={styles.micLogo}><img src={micLogo} alt="" /></a>
        </div>
        <div className={styles.searchBtn}>
          <a><img src={searchLogo} alt="" /></a>
        </div>
      </div>
    </main>
  )
}
