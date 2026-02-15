import React, { useState } from 'react'
import styles from './PhotoGallery.module.css'

export default function PhotoGallery( props ) {

  return (
    <>
    
    
    <div className={styles.displayPhotos}>
      <div className={styles.displayPhoto}>
        <a href={props.url}>
          <img className={styles.cartImage} src={props.image} alt="" />
          <div className={styles.cartDetails}>
            <p className={styles.cartPhotographer}> {props.photographer}</p>
            <p className={styles.alt}>{props.alt}</p>
          </div>
        </a>
      </div>
    </div>
      </>
  )
}
