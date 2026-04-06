import React from 'react'
import styles from '../Login/Login.module.css'
import LoginForm from '../../Components/LoginForm/LoginForm'
import OurFeatures from '../../Components/OurFeatures/OurFeatures'




export default function Login() {
  return (
    <>
    <main className={styles.heroSection}>
      <div className={styles.input}>
      </div>
    </main>
    <section className={styles.loginContainer}>
      <div className={styles.loginTitle}>
        <p>Welcome Back!</p>
      </div>
      <LoginForm />
    </section>
    </>
  )
}

