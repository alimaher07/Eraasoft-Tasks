const waitingServing = []

// Action

const nameInput = document.querySelector(".name-input")
const addButton = document.querySelector(".add-btn")
const serveNext = document.querySelector(".serve-next")

// Print

const nowServing = document.querySelector(".now-serving")
const waiting = document.querySelector(".waiting-serving")

let i = 0
addButton.addEventListener("click", () => {
  const name = nameInput.value
  waitingServing.push(name)
  waiting.innerHTML += `
  <div class="waiting-serving bg-primary bg-opacity-10 border-start border-primary border-4 rounded-2 p-1 ps-2 mt-3 w-100">
  #${i+=1} ---${name}
  </div>`
})


let h = 0
serveNext.addEventListener("click", () =>{
  const readyName = waitingServing.shift()
  waiting.innerHTML = ""
  nowServing.innerHTML = ""
  nowServing.innerHTML =`
  <div class="now-serving bg-success bg-opacity-10 border-start border-success border-4 rounded-2 p-1 ps-2 mt-3 w-100">
  <span class="fw-bold">Now Serving:</span> #${h+=1} ---${readyName}
  </div>`
})