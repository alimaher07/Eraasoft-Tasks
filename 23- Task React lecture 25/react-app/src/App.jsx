import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'

import richDadBook from './assets/RichDadAndBoorDad.png'
import DesignOfBooksbook from './assets/DesignOfBooks.png'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import Footer from './components/Footer/Footer.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import OurFeatures from './components/OurFeatures/OurFeatures.jsx'


function App() {
  const products = [
    {
      image: richDadBook,
      title: 'Rich Dad And Poor Dad',
      author: 'Robert T-kiyosanki',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus corrupti ratione officiis incidunt ipsum, provident eveniet recusandae vero a non sit illo? Mollitia, voluptates amet. Id repellendus quis ipsa?',
      reviews: '180',
      rate: '4.2',
      price: '30',
      isAddedToCart: false
    },
    {
      image: DesignOfBooksbook,
      title: 'The Design Of Books',
      author: 'Debbie Berne',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, possimus corrupti ratione officiis incidunt ipsum, provident eveniet recusandae vero a non sit illo? Mollitia, voluptates amet. Id repellendus quis ipsa?',
      reviews: '210',
      rate: '4.2',
      price: '40',
      isAddedToCart: false
    }
  ]

  return (
    <>
    <NavBar />
    <HeroSection />
    <OurFeatures />

      <section className='recomended-section'>
        <h2>Recomended For You</h2>
        <div className="product-cards">
              {products.map(product => [
                <ProductCard 
                image= {product.image}
                title = {product.title}
                author = {product.author}
                description = {product.description}
                reviews = {product.reviews}
                rate = {product.rate}
                price = {product.price}
                isAddedToCart = {product.isAddedToCart}
                />
              ])}
          </div>
      </section>
      
      <Footer />
    </>
  )
}

export default App
