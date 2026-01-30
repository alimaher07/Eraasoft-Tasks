const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id")

console.log(id)

const product = document.querySelector(".product")
fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then((data) => {
  console.log(data)
  product.innerHTML = `
  <div class="product-img w-50">
    <img class="img-face rounded" src="${data.images[0]}" alt="" style="width: 24svw;">
    
      <div class="img-choices d-flex mt-3 gap-3">
      ${data.images.map((image) => `<img class="rounded" src="${image}" alt="">`).join("")}
      </div>
    </div>
    <div class="product-details">
      <small class="text-secondary mt-3">${data.tags[0]} / ${data.tags[1]}</small>
      <h2 class="fw-bold mt-3">${data.title}</h2>
      <div class="rate mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half text-warning" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>
        <small class="text-secondary mt-5">${data.rating} [143 reviews]</small>
      </div>
      <div class="salary mt-3 d-flex gap-2 align-items-center fw-bold">
        <p class="text-primary m-0 fs-3">$${data.price}</p>
        <small class="old-price text-secondary fs-4">$${Math.round((data.price + data.discountPercentage) * 100) /100}</small>
        <small class="bg-danger text-white p-1 rounded-1">${Math.round(((data.discountPercentage / (data.price + data.discountPercentage)) * 100) * 100) / 100}% OFF</small>
      </div>
      <div class="description mt-3">
        <p class="text-dark-emphasis">${data.description}</p>
      </div>
      <div class="product-advantages text-dark-emphasis mt-3 row d-flex direction-column gap-2">
        <div class="col">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <span>The depth is: ${data.dimensions.depth}</span>
        </div>
        <div class="row">
          <div class="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <span>The Height is: ${data.dimensions.height}</span>
        </div>
        </div>
        <div class="row">
          <div class="col">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <span>The width is: ${data.dimensions.width}</span>
          </div>
        </div>
      </div>
      <div class="buttons gap-4 mt-5 mb-5">
          <button class="cart-btn btn btn-primary border border-less rounded p-2 px-5 text-white w-50 gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="cart-icon">
            <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8L16 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
            <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#FFFFFF" stroke-width="2"/>
            </svg>
            <span class="pt-1">Add to Cart</span></button>
          <button class="fav-btn bg-white border border-primary rounded text-primary p-3 px-5" style="padding: 8px !important;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
            <span>Add To WishList</span>
          </button>
      </div>
      <p class="text-secondary m-0">SKU: <span class="text-dark">${data.sku}</span></p>
      <p class="text-secondary m-0">Availability: <span class="text-dark">${data.availabilityStatus} (${data.stock} items)</span></p>
      <p class="text-secondary m-0">Shipping: <span class="text-dark">${data.shippingInformation}</span></p>
    </div>`
});