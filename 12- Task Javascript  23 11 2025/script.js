const products = [
  {
    id: 1,
    slug: "galaxy-s24-ultra",
    title: "Samsung Galaxy S24 Ultra",
    description: "6.8-inch AMOLED display, Snapdragon 8 Gen 3, 200MP camera.",
    image: "/images/products/s24-ultra.jpg",
    old_price: 1499,
    price_after_sale: 1299,
    currency: "USD"
  },
  {
    id: 2,
    slug: "iphone-15-pro-max",
    title: "Apple iPhone 15 Pro Max",
    description: "A17 Pro chip, titanium design, 48MP camera, long battery life.",
    image: "/images/products/iphone-15-pro-max.jpg",
    old_price: 1599,
    price_after_sale: 1499,
    currency: "USD"
  },
  {
    id: 3,
    slug: "macbook-air-m3",
    title: "MacBook Air M3",
    description: "13-inch Retina display, M3 chip, 8GB RAM, 256GB SSD.",
    image: "/images/products/macbook-air-m3.jpg",
    old_price: 1399,
    price_after_sale: 1249,
    currency: "USD"
  },
  {
    id: 4,
    slug: "lenovo-legion-7",
    title: "Lenovo Legion 7",
    description: "AMD Ryzen 9, RTX 4070, 16GB RAM, 1TB SSD, 16-inch QHD display.",
    image: "/images/products/lenovo-legion-7.jpg",
    old_price: 2199,
    price_after_sale: 1999,
    currency: "USD"
  },
  {
    id: 5,
    slug: "anker-powercore-20000",
    title: "Anker PowerCore 20000mAh Power Bank",
    description: "High-capacity portable charger with fast charging.",
    image: "/images/products/anker-powercore-20000.jpg",
    old_price: 69,
    price_after_sale: 49,
    currency: "USD"
  },
  {
    id: 6,
    slug: "sony-wh-1000xm5",
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise-canceling wireless headphones.",
    image: "/images/products/sony-wh-1000xm5.jpg",
    old_price: 399,
    price_after_sale: 349,
    currency: "USD"
  },
  {
    id: 7,
    slug: "logitech-mx-master-3s",
    title: "Logitech MX Master 3S Mouse",
    description: "Ergonomic wireless mouse with precision tracking and fast scrolling.",
    image: "/images/products/logitech-mx-master-3s.jpg",
    old_price: 119,
    price_after_sale: 99,
    currency: "USD"
  },
  {
    id: 8,
    slug: "apple-airpods-pro-2",
    title: "Apple AirPods Pro (2nd Gen)",
    description: "Active noise cancellation, personalized spatial audio, USB-C case.",
    image: "/images/products/airpods-pro-2.jpg",
    old_price: 299,
    price_after_sale: 269,
    currency: "USD"
  }
];

const mobileCards1 = document.querySelector(".first-container")

let i = 0

while(i < products.length && i < 4){
  mobileCards1.innerHTML += `<div class="col fw-bold p-2 border border-secondary-subtle rounded-2">
    <img src="${products[i].image}" alt="" class="w-100 rounded-2" style="height: 190px">
    <div class="products-container">
      <h3 class="text-dark fs-4 pt-2 slug">${products[i].slug}</h3>
      <h3 class="text-dark fs-4 pt-2 products">${products[i].title}</h3>
      <p class="description text-secondary">${products[i].description}</p>
      <p class="green-span text-success">${products[i].old_price}$ <small class="red-span text-danger" style>${products[i].price_after_sale}$</small></p>
      <p class="text-secondary m-0">${products[i].currency}</p>
      <div class="buttons align-items-center justify-content-between">
        <button class="cart-btn bg-primary border border-less rounded-start p-2 px-5 text-white gap-1" style="border-top-left-radius: 0px !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="cart-icon">
          <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#FFFFFF" stroke-width="2"/>
          </svg>
          <span class="pt-1">Add to Cart</span></button>
        <button class="fav-btn border border-primary rounded-end" style="border-top-right-radius: 0px !important; padding: 6px !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect width="30" height="30" fill="#F5F5F5"/>
          <g id="Frame 1">
          <rect width="1440" height="1140" transform="translate(-350 -538)" fill="white"/>
          <g id="Group 11">
          <g id="Group 7">
          <g id="Rectangle 1">
          <rect x="-248" y="-348" width="300" height="400" rx="6" fill="white"/>
          <rect x="-247.5" y="-347.5" width="299" height="399" rx="5.5" stroke="#323232" stroke-opacity="0.196078"/>
          </g>
          <g id="Group 5">
          <g id="Group 3">
          <path id="Rectangle 4" d="M39 -9V34C39 36.7614 36.7614 39 34 39H-9V-9H39Z" fill="white" stroke="#007BFF" stroke-width="2"/>
          <g id="Favorite">
          <path id="Vector 15" d="M5.56335 17.3853L14.3153 25.6068C14.6398 25.9116 14.802 26.064 15 26.064C15.198 26.064 15.3602 25.9116 15.6847 25.6068L15.6847 25.6068L24.4367 17.3853C26.8819 15.0882 27.1788 11.3082 25.1223 8.65758L24.7356 8.15918C22.2753 4.98822 17.337 5.52002 15.6083 9.14206C15.3641 9.6537 14.6359 9.6537 14.3917 9.14206C12.663 5.52002 7.72465 4.98823 5.26443 8.15918L4.87773 8.65759C2.82118 11.3083 3.11813 15.0882 5.56335 17.3853Z" stroke="#007BFF" stroke-width="2"/>
          </g>
          </g>
          </g>
          </g>
          </g>
          </g>
          </svg>
        </button>
      </div>
    </div>
  </div>`
  i += 1
}

const mobileCards2 = document.querySelector(".second-container")

while(i < products.length && i < 8){
  mobileCards2.innerHTML += `<div class="col fw-bold p-2 border border-secondary-subtle rounded-2">
    <img src="${products[i].image}" alt="" class="w-100 rounded-2" style="height: 190px">
    <div class="products-container">
      <h3 class="text-dark fs-4 pt-2 slug">${products[i].slug}</h3>
      <h3 class="text-dark fs-4 pt-2 products">${products[i].title}</h3>
      <p class="description text-secondary">${products[i].description}</p>
      <p class="green-span text-success">${products[i].old_price}$ <small class="red-span text-danger" style>${products[i].price_after_sale}$</small></p>
      <p class="text-secondary m-0">${products[i].currency}</p>
      <div class="buttons align-items-center justify-content-between">
        <button class="cart-btn bg-primary border border-less rounded-start p-2 px-5 text-white gap-1" style="border-top-left-radius: 0px !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="cart-icon">
          <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#FFFFFF" stroke-width="2"/>
          </svg>
          <span class="pt-1">Add to Cart</span></button>
        <button class="fav-btn border border-primary rounded-end" style="border-top-right-radius: 0px !important; padding: 6px !important;">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect width="30" height="30" fill="#F5F5F5"/>
          <g id="Frame 1">
          <rect width="1440" height="1140" transform="translate(-350 -538)" fill="white"/>
          <g id="Group 11">
          <g id="Group 7">
          <g id="Rectangle 1">
          <rect x="-248" y="-348" width="300" height="400" rx="6" fill="white"/>
          <rect x="-247.5" y="-347.5" width="299" height="399" rx="5.5" stroke="#323232" stroke-opacity="0.196078"/>
          </g>
          <g id="Group 5">
          <g id="Group 3">
          <path id="Rectangle 4" d="M39 -9V34C39 36.7614 36.7614 39 34 39H-9V-9H39Z" fill="white" stroke="#007BFF" stroke-width="2"/>
          <g id="Favorite">
          <path id="Vector 15" d="M5.56335 17.3853L14.3153 25.6068C14.6398 25.9116 14.802 26.064 15 26.064C15.198 26.064 15.3602 25.9116 15.6847 25.6068L15.6847 25.6068L24.4367 17.3853C26.8819 15.0882 27.1788 11.3082 25.1223 8.65758L24.7356 8.15918C22.2753 4.98822 17.337 5.52002 15.6083 9.14206C15.3641 9.6537 14.6359 9.6537 14.3917 9.14206C12.663 5.52002 7.72465 4.98823 5.26443 8.15918L4.87773 8.65759C2.82118 11.3083 3.11813 15.0882 5.56335 17.3853Z" stroke="#007BFF" stroke-width="2"/>
          </g>
          </g>
          </g>
          </g>
          </g>
          </g>
          </svg>
        </button>
      </div>
    </div>
  </div>`
  i += 1
}