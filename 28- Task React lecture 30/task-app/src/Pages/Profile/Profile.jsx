import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import profilePhoto from '../../assets/Avatar Image.png'

export default function profile() {
  const [ user , setUser ] = useState(null)
  const [ loading , setLoading ] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      console.log("1. useEffect started .....")
      const token = Cookies.get('userToken')
      console.log("2. Token from Cookies:" , token)
      if(!token){
        console.log("3. No Token found")
        window.location.href = '/register'
        return;
      }
      try{
        const res = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', }
        })
        console.log("4. Response status:" , res.status)
          const data = await res.json()
          console.log("5. Data recieved from API", data)
          if(res.ok){
            setUser(data)
          }else{
            console.log("6. Server returned an error", data.message)
          }
        }
        catch(err){
          console.log("7. Fetch error (network or Syntax):", err)
        }
        finally{
          setLoading(false)
        }
      // catch(error){
      //   console.log("Error fetching data",error)
      // }finally{
      //   setLoading(false)
      // }
    }
    fetchProfile()
    
      // const res = fetch('https://dummyjson.com/auth/user', {
      //   method: 'GET',
      //   headers: {
      //     'Autorization' : 'User'
      //   },
      //   'credentials' : 'include'
      // })
      // const data =  Cookies.get("userData")
      // if(data){
      //   setUser(JSON.parse(data))
      //   console.log(setUser)
      // }
    }, [])
  
  // useEffect(() => {
  //   const data = Cookies.get("userData")
  //   if(data) {
  //     setUser(JSON.parse(data))
  //     console.log(setUser)
  //   }
  // },[])
  
  
  return (
    <>
    <main className={styles.heroSection}>
      <div className={styles.input}>
      </div>
    </main>
    <div className={styles.profilePhoto}>
      <img src={profilePhoto} alt="" />
    </div>
    <form className={styles.formContainer}>
      <h3>General Information</h3>
      <div className={styles.className}>
        <div className={styles.firstName}>
          <label>First Name</label>
          <p className={styles.firstNameStyle}>{user?.firstName}</p>
        </div>

        <div className={styles.lastName}>
          <label>Last Name</label>
          <p className={styles.lastNameStyle}>{user?.lastName}</p>
        </div>
      </div>

        <div className={styles.emailContainer}>
          <label>Email</label>
          <p className={styles.emailInput}>{user?.email}</p>
        </div>

        <div className={styles.passwordContainer}>
          <label>Phone Number</label>
          <p className={styles.passwordInput}>{user?.phone}</p>
        </div>

        <div className={styles.addressContainer}>
          <label>Address</label>
          <p className={styles.addressInput}>{user?.address.address}</p>
        </div>
    </form>
    </>
  )
}
