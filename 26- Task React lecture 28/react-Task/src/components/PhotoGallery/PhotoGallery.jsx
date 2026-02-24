import React, { useContext, useState } from 'react'
import styles from './PhotoGallery.module.css'
import { QueryContext } from '../../App'

export default function PhotoGallery( { url, image, photographer, alt } ) {
  const query = useContext(QueryContext)
  return (
    <>
    <div className={styles.displayPhotos}>
      <div className={styles.displayPhoto}>
        <a href={url}>
          <img className={styles.cartImage} src={image} alt="" />
          <div className={styles.cartDetails}>
            <p className={styles.cartPhotographer}> {photographer}</p>
            <p className={styles.alt}>{alt}</p>
            <p>{query}</p>
          </div>
        </a>
      </div>
    </div>
      </>
  )
}
