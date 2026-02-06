import styles from './NavBar.module.css'
import bookLogo from '../../assets/book-bookmark 1.svg'

function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        <div className={styles.logo}>
        <img className={styles.img} src={bookLogo} alt="" />
        <small>BookShop</small>
        <span>|</span>
        </div>
        <nav className={styles.navLinks}>
          <a className={styles.navLink} href="">Home</a>
          <a className={styles.navLink} href="">Books</a>
          <a className={styles.navLink} href="">About us</a>
        </nav>
      </div>
      <div className={styles.linkBtns}>
        <button className={styles.purpleBtn}>Login in</button>
        <button className={styles.whiteBtn}>Sign Up</button>
      </div>
    </header>
  )
}

export default NavBar
