import React from 'react';
import styles from './RegisterForm.module.css'
import { useFormik } from 'formik';
import { Link } from 'react-router';
import facebookLogo from '../../assets/Group.svg'
import googleLogo from '../../assets/logos_google-icon.svg'
import * as Yup from "yup"

const RegisterForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      passwordConfirm: Yup.string()
      .min(8, 'Must be 8 characters at least')
      .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters at least')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
      <div className={styles.firstLastName}>
      <div className={styles.firstName}>
      <label htmlFor="firstName">First Name</label>
      <input
        className={styles.firstNameStyle}
        id="firstName"
        name="firstName"
        type="text"
        placeholder='John'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      </div>

      <div className={styles.lastName}>
      <label htmlFor="lastName">Last Name</label>
      <input
        className={styles.lastNameStyle}
        id="lastName"
        name="lastName"
        type="text"
        placeholder='Smith'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      </div>
      </div>

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

      <div className={styles.passwordConfirmContainer}>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input className={styles.passwordInput}
          placeholder='Enter Password'
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
        <div>{formik.errors.passwordConfirm}</div>
      ) : null}
      </div>


      <button type="submit" className={styles.submit}>Sign Up</button>

      <div className={styles.signAsk}>
        <span>Already have an account?<Link to={"/register"} className={styles.signLink}>Login</Link></span>
      </div>
      <small>or</small>

      <button type="submit" className={styles.logGoogle}><img src={googleLogo} alt="" className={styles.googleIcon}/>Login with Google</button>

      <button type="submit" className={styles.logFacebook}><img src={facebookLogo} alt="" />Login with Facebook</button>
    </form>
  );
};
export default RegisterForm