import React, { useContext } from 'react'
import PhotoGallery from '../PhotoGallery/PhotoGallery'

export default function ImageContainer({ images }) {
  return (
    <>
    {images?.map((image) => (
            <PhotoGallery
              key={image.id}
              image={image.src.medium}
              photographer={image.photographer}
              alt={image.alt}
              url={image.url}
            />
          ))}
    </>
  )
}
