import React from 'react'
import styles from './Footer.module.css'
import bookLogo from '../../assets/book-bookmark 1.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import earth from '../../assets/earth-americas.svg'
import XIcon from '../../assets/X.svg'
import YoutubeIcon from '../../assets/Youtube.svg'
import IsntagramIcon from '../../assets/Instagram.svg'
import FacebookIcon from '../../assets/Facebook.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerUpper}>
          <div className={styles.footerLogoLinks}>
            <div className={styles.logo}>
              <img className={styles.img} src={bookLogo} alt="" />
              <small>BookShop</small>
              <span>|</span>
            </div>
            <div className={styles.footerLinks}>
              <a className={styles.footerLink} href="">Home</a>
              <a className={styles.footerLink} href="">Books</a>
              <a className={styles.footerLink} href="">About us</a>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <img src={FacebookIcon} alt="" />
            <img src={IsntagramIcon} alt="" />
            <img src={YoutubeIcon} alt="" />
            <img src={XIcon} alt="" />
          </div>
        </div>
        <div className={styles.footerBottom}>
            <div className={styles.leftSide}>
              <p>Developed By Eraasoft All Copy Right Reversed @2024</p>
            </div>
            <div className={styles.rightSide}>
                <img src={earth} alt="" />
                <span className={styles.arrowInput}>English <img src={arrowLeft} alt="" /></span>
            </div>
        </div>
      </footer>
  )
}
