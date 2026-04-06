import React from 'react';
import styles from './LoginForm.module.css'
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router';
import facebookLogo from '../../assets/Group.svg'
import googleLogo from '../../assets/logos_google-icon.svg'
import * as Yup from "yup"
import Cookies from 'js-cookie';

const LoginForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Must be 8 characters at least')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit : values => {
      Cookies.set("userData", JSON.stringify(values), {expires: 7})
      console.log("Saved in Cookie")
      Navigate("/profile")
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <div className={styles.emailContainer}>
        <label htmlFor="email">Email</label>
        <input className={styles.emailInput}
          placeholder='example@gmail.com'
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      </div>

      <div className={styles.passwordContainer}>
        <label htmlFor="password">Password</label>
        <input className={styles.passwordInput}
          placeholder='Enter Password'
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      </div>

      <div className={styles.saveOrForget}>
        <div className={styles.save}>
          <input type="checkbox" name="" id="" /> Remember me
        </div>
        <a href="#" className={styles.forget}>Forget password</a>
      </div>

      <button type="submit" className={styles.submit}><Link to={"/profile"}>Log in</Link></button>

      <div className={styles.signAsk}>
        <span>Don't have an account?<Link to={"/register"} className={styles.signLink}>Sign up</Link></span>
      </div>
      <small>or</small>

      <button type="submit" className={styles.logGoogle}><img src={googleLogo} alt="" className={styles.googleIcon}/>Login with Google</button>

      <button type="submit" className={styles.logFacebook}><img src={facebookLogo} alt="" />Login with Facebook</button>
    </form>
  );
};
export default LoginForm