import React from 'react'
import photoIcon from '../../assets/photoGallery.svg'
import styles from './logo.module.css'

export default function logo() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navigator}>
      <img className={styles.navLogo} src={photoIcon} alt="" />
      <p className={styles.navTitle}>PhotoSearch</p>
      </div>
      <p className={styles.navDescription}>Discover stunning high-quality images</p>
    </div>
  )
}
