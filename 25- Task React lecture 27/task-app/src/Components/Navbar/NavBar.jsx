import styles from './NavBar.module.css'
import bookLogo from '../../assets/book-bookmark 1.svg'
import { NavLink } from 'react-router'

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
          <NavLink to={`/home`} className={styles.navLink} href="">Home</NavLink>
          <NavLink to={`/books`} className={styles.navLink} href="">Books</NavLink>
          <NavLink to={`/about`} className={styles.navLink} href="">About us</NavLink>
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
